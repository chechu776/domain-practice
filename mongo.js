db.orders.find().sort({total_amount:-1}).limit(1)

db.orders.aggregate(
    [
        {
            $group:{
                _id:null,totalRevenue : {$sum:"$total_amount"}
            }
        }
    ]
)

db.orders.aggregate(
    [
        {
            $group:{
                _id:"$user_id",
                totalSpent:{$sum:"$total_amount"}
            },
        },
        {
            $sort:{
                totalSpent:-1
            }
        },
        {
            $limit:5
        },
        {
            $lookup:{
                from:"users",
                localField:"_id",
                foreignField:"_id",
                as:"name"
            }
        },
        {
            $unwind:"$name"
        },
        {
            $project:{
                _id:0,
                name:"$name.first_name",
                totalSpent:1
            }
        }
    ]
)

db.orders.aggregate(
    [
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$product_id",
                productName:{ $first: "$items.product_name" },
                totalQty:{$sum:"$items.quantity"}
            }
        },
        {
            $sort:{
                totalQty:-1
            }
        },
        {
            $limit:5
        }
    ]
)

db.orders.aggregate([
  {
    $group: {
      _id: { month: { $month: "$order_date" }, year: { $year: "$order_date" } },
      totalRevenue: { $sum: "$total_amount" }
    }
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
])

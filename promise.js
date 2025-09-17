// function check (a,b){
//     return new Promise ((resolve,reject) =>{
//         if(a==0 || b==0)
//         {
//             reject("error")
//         }
//         else
//         {
//             resolve(a+b)
//         }
//     })
// }

// async function display() {
//     try{
//         const result = await check(0,2)
//         console.log(result);
//     }
//     catch(err)
//     {
//         console.log(err);
        
//     }
// }

// display()

const p1 =  Promise.resolve(10)
const p2 =  Promise.resolve(20)
const p3 =  Promise.resolve(40)

Promise.all([p1,p2,p3]).then((res)=>{console.log(res)})
.catch((error)=>{
    console.log("error",error);
})
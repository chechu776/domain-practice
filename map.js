// const arr = ["shanu","shamsudheen","nadhil","riyas"]

// const arr2 = arr.filter((e)=>{
//     return e.startsWith("s")
// })

// console.log("",arr2);

const a = [ 1,2,4,5,6,8]

const ne = a.reduce((e,s)=>{
    return e+s
},0)

console.log(ne);

// a.forEach((e,i)=>{
//     console.log(e,i);
// })

// for(let e of a )
// {
//     console.log(e);
    
// }

const stud = {name:"chechu", age:20}

stud.name = "sameer"

for ( let a in stud)
{
    console.log(a ,":", stud[a]);
    
}

// stud.address = " kochi "

// for ( let a in stud)
// {
//     console.log(a ,":", stud[a]);
// }

const copy = {...stud}

console.log("copy" , copy);



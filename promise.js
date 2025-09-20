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

// const p1 = Promise.resolve(10)
// const p2 = Promise.resolve(20)
// const p3 = Promise.resolve(40)

// Promise.all([p1, p2, p3]).then((res) => { console.log(res) })
//     .catch((error) => {
//         console.log("error", error);
//     }) zxz

const app = (a) => {
    return new Promise((res, rej) => {
        if (a == 0)
            res("promise resolved")
        else {
            rej("promise rejected");
        }
    })
}

const promisedisplay = async () => {
    try {
        const result = await app(0);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

const newpro = (a) => {
    return new Promise
}

promisedisplay()
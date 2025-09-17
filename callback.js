const sum = (a,b)=>{
    return a+b;
}

const read = (callback)=>{
    let a = 5;
    let b = 10;
    return callback(a,b)
}

console.log(read(sum))
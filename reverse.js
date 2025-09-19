// const a = [1,2,3,4,5,6]

// for(let i = 0 ; i <= (a.length-1)/2 ; i++)
// {
//     let temp = a[i];
//     a[i]=a[a.length-1-i];
//     a[a.length-1-i]=temp
// }
// console.log("reversed array : ",a);

const s = "heh"

const s2 = s.split("")

console.log(s2);

for(let i = 0 ; i <= (s2.length-1)/2 ; i++)
{
    let temp =s2[i];
    s2[i]= s2[s2.length-1-i];
    s2[s2.length-1-i]=temp
}

console.log("new reversed array is ",s2);

const s3 = s2.join("")

console.log(s3);


if(s==s3)
{
    console.log("palindrome");
    
}
else
{
    console.log("not palindrome");
    
}
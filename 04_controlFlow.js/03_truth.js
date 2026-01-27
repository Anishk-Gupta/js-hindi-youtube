//  const userEmail = "h@hitesh.ai"
//  if(userEmail){
//     console.log("got user email");  
// } else{
//     console.log("don't have user email");   
// }

// falsy value = false , 0 , -0 , BigInt 0n, "", null , undefined , NaN
// truth value = "0" , 'false' , " ", [] , {} , function(){}

// const arr = [];
// if(arr.length===0){
//     console.log("array is empty");  
// }
// const emptyObj = {}
// if(Object.keys().length===0){
//     console.log("object is empty");  
// }
// false==0 => true
// false == '' => true
// 0=='' => true

// Nullish Coalescing operator (??) : null undefined

let val1;
//val1 = 5??10
//val1 = null ?? 10
// val1 = undefined ?? 15
 // val1 = null ?? 10 ?? 15
// console.log(val1);


// ternary operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");


 // primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *******************************************MEMORY********************************************************
// stack(primitive) heap (non-primitive)
// copy create      refrence 
let num = 10;
let num1 = num;
num1 = 20;
console.log(num1);
console.log(num);

let obj1 = {
    userName : "Anishk",
    userAge : 19,
}
let obj2 = obj1
obj2.userName = "Hitesh"
console.log(obj1.userName) // hitesh
console.log(obj2.userName); // hitesh



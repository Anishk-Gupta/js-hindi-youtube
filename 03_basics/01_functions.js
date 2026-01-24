function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("k");
}
//sayMyName(); ye to execute statement hai sayMyName ye keval refrence hai function ka
// function addTwoNumbers(num1,num2){ // num1 and num2 are parameters
//     console.log(num1+num2);
    
// }
//addTwoNumbers(2,"6") // 26 // 2,"6" are arguments
// const result = addTwoNumbers(2,5)
//console.log("result : " , result); // result ke andar undefined hai kyonki function to kuch bhi return nhi kar rha hai na isliye
function sum(num1,num2){ // num1 and num2 are parameters
    // let ans = num1 + num2;
    // return ans;
    return num1 + num2;
}
let result1 = sum(10,16);
//console.log("result1 : " , result1);

function loginUserMessage(username = "sam"){ // default jab username nhi diya ho
    // if(!username){ // !username isliye kyonki username undefined hai usko false mana jata hai aur jaise hi ! ye symbol lagaya wo true ho gya 
    //     console.log("please enter the user name") 
    // }
    // else{
    //     return `${username} just logged in`;
    // }
}
//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage()); // undefined just logged in

// function calculateCartPrice(...num1){ // ... ye rest operator hai ye sabhi values ko array me combine karta hai jab hum multiple arguments dete hai
//     return num1;
// }
// console.log(calculateCartPrice(100 , 500 , 5000));
function calculateCartPrice(value1 , value2 , ...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,500 , 600 , 7000)); // [500,600,7000] ye hi aayega kyonki value1 = 200 and value2 = 300

// const user = {
//     name:"anishk",
//     price:899
// }
function handleObject(obj){
    console.log(`user name is ${obj.name} and price is ${obj.price}`)
}
handleObject({
    name : "sam",
    price : 824
});
 
const array = [400,200,30,65]
function handleArray(arr){
    return arr[2];
}
console.log(handleArray([50,60,64,54]));

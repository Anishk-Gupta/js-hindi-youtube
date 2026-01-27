// if
// const isUserLoggedIn = true
// if(2=="2"){
//     console.log("executed");  
// } else{
//     console.log("not executed")
// }
// < ,> ,<= , >= , == , != , === , !==

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`); 
// }
// console.log(`User power : ${power}`)

const balance = 1000
//if(balance>500) console.log("test");

// if(balance<500){
//     console.log("balance less than 500");   
// } else if(balance<750){
//     console.log("balance less than 750");   
// } else if(balance<900){
//     console.log("balance less than 900");
// } else{
//     console.log("balance is greater than 900");   
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
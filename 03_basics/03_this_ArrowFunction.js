const user = {
    username:"ANISHK",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "Hitesh"
// user.welcomeMessage()
//console.log(this); // {} ye aata hai lekin jab aap isko browser ke console par run karte hai tab windows jaise global objects aate hai

// mainly this use hota hai objects ke andar
// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName); // function ke andar this nhi use hota hai undefined
// }
// chai()

// const chai = function(){
//     let username = " anishk"
//     console.log(this.username); // undefined
//     console.log(this);
// }
// chai()
//++++++++ARROW FUNCTION++++++++++++
// const chai = () => {
//     let username = " anishk"
//     console.log(this.username); // undefined
    
//     console.log(this); // {}
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(4,6));

// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(4,8));

// const addTwo = (num1 , num2) => (num1+num2)
// console.log(addTwo(54,62));


// const addTwo = (num1 , num2) =>  ({username : "hitesh"})  // without() paranthesis ye return nhi hota hai object
// console.log(addTwo(10,15));



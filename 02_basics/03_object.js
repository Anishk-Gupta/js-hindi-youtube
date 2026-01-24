// singleton
// object.create

// object literals
const myKey = Symbol("key1")
const obj = {
    name : "Anishk",
    [myKey] : "key", // symbol ko use kiya hai object ke andar
    "full_name" : "Anishk Gupta",
    age : 18,
    location : "jaipur",
    email : "anishkgupta994@gmail.com",
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(obj.email);
// console.log(obj["email"]);
// console.log(obj["full_name"]);
// console.log(obj[myKey]);
obj.email = "anishkgupta@gmail.com"
//console.log(obj);
//Object.freeze(obj) // is statement ke baad object change nhi hota hai isliye jab bhi object par kaam karna ho is statement ko hata dena 
obj.email = "gupta@gmail.com"
//console.log(obj);
// jab object ke bahar function declare karna ho to aise karte hai ye dono function object ka hi part hai
obj.greeting = function(){
    console.log("hello js user")
}
obj.greeting1 = function(){
    console.log(`hello js user ${this.name}`)
}
obj.greeting();
obj.greeting1();
console.log(obj);







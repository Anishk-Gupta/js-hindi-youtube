// let str1 = "anishk    "
// let str2 = "chai    "
// console.log(str1.trim().length) by default mai chahta hu ki string ke pass ek property / method ho jisse mere ko uski true length aaye

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(this.trim().length)
}
let user = "anishk    "
user.trueLength();

let array = ["shaktiman","thor"]
const chai = {
    username : "chai",
    price : 25
}
Object.prototype.printMe = function(){
    console.log(this)
}
chai.printMe()
array.printMe()
user.printMe()


// inheritance

const obj1 = {
    user : "anishk",
    age : "20"
}
const obj2 = {
    branch : "cse",
    college : "mbm"
}
const obj3 = {
    startTime : "10",
    endTime : "5"
}
// Object.setPrototypeOf(obj2, obj1) obj2 obj1 ki property access kar sakta hai
// Object.setPrototypeOf(obj3, obj2)

// obj2.__proto__ = obj1
// obj3.__proto__ = obj2
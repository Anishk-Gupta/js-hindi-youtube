function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2 // kisi bhi function me properties add kar sakta hu
// console.log(multipleBy5(5)) // 25
// console.log(multipleBy5.power) // 2
// console.log(multipleBy5.prototype) // {} har function ke pass ek default empty prototype object hota hai

function createUser(username , score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is : ${this.score}`)
}
const user1 = new createUser("anishk",25)
const user2 = new createUser("hitesh",30)
user1.increment()
console.log(user1)
// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email= email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     logMe(){
//         return this.username
//     }
// }

// const chai = new user("anishk","a@gmail.com","123")
// console.log(chai.encryptPassword())
// console.log(chai.logMe())

// behind the scene

function user(username,email,password){
    this.username = username
    this.password = password
    this.email = email
}
user.prototype.encryptPassword = function(){
    return this.password
}
user.prototype.logMe = function(){
    return this.username
}
const tea =  new user("tea","t@.com","1234")
console.log(tea.encryptPassword())
console.log(tea.logMe())
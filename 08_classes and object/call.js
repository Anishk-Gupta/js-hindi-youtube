function setUserName(username){
    console.log("called")
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("anishk","a@gmail.com","123")
console.log(chai)
class user{
    constructor(username,password){
        this.username = username
        this.password = password
    }
    set username(value){
        this._username = value
    }
    get username(){
        return this._username.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase()
    }
}
const chai = new user("anishk","123")
console.log(chai.username)
console.log(chai.password)

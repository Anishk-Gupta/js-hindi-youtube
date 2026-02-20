class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        return this.username
    }
}

class teacher extends user{
    constructor(username,password){
        super(username)
        this.password = password
    }
}

const chai = new teacher("anishk","123")
console.log(chai.logMe())

console.log(chai instanceof teacher)
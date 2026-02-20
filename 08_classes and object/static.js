class user{
    constructor(username , password){
        this.username = username
        this.password = password
    }

    static createId(){
        return this.password
    }
}

const coffee = new user("coffee","1235")
console.log(coffee.createId())
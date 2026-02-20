const user = {
    email : "a@gmail.com",
    password : "abc",

    set _email(value){
        this.email  = value
    },

    get _email(){
        return this.email.toUpperCase()
    }
}

const tea = Object.create(user)
console.log(tea._email)
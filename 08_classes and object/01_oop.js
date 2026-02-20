// object literals 
// object => properties and methods

const user = {
    // properties
    username : "Anishk",
    logginCount : 8,
    isLoggedIn : true,

    // methods
    getUser : function(){
       // console.log("hello i am anishk")
        // generally kisi function ke andar this ka use hota hai kyonki wo function ek ke liye nhi multiple ke liye ho sakte hai na
        console.log(this.username)
        console.log(this) // current context ko print karega 
    }
}

// user.getUser()
// console.log(this) // {}

function User(username , logginCount , isLoggedIn){
    this.username = username
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn
    return this
}
const user1 = new User("Anishk",8,true)
const user2 = new User("hitesh",9,false)
// new keyword isliye use hota hai ki value overwrite se bachne ke liye and new apko ek khudki nayi copy deta hai 
//step1 = empty object deba
// step2 = constructor ko call karna 
// step3 = arguments ko wrap karna
console.log(user1)
console.log(user2)
console.log(user1.constructor)
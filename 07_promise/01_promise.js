const promiseOne = new Promise(function (resolve , reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function (resolve , reject){
   setTimeout(function(){
    console.log("async task is complete")
    resolve()
   },1000)
}).then(function(){
    console.log("promise two is consumed")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("ASYNC 3 IS COMPLETED")
        resolve({usename : "anishk" , email : "anishk@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username : "harshit" , password : "123"})
        } else{
            reject('something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("either resolve or reject part run")
})

const promiseFive = new Promise(function (resolve , reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "javascript" , password : "123"})
        } else{
            reject('error is found')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E : ",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("task is complete")
})
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) Math.PI change nhi hota kyo nhi hota aaye dekhe

// console.log(Object.getOwnPropertyDescriptor(Math,"PI")) internally writable enumerable and configurable unko false kiya hai

let obj = {
    name : "chai",
    price : 250,
    isAvailable : true,

    display : function(){
        console.log("chai nhi bani")
    }
}

//console.log(Object.getOwnPropertyDescriptor(obj,"name"))

Object.defineProperty(obj,"name",{
    enumerable : false,
    writable : false
})
console.log(Object.getOwnPropertyDescriptor(obj,"name"))

for (let [key,value] of Object.entries(obj)) {
    if(typeof value!== 'function'){
        console.log(`${key} : ${value}`)
    }
}

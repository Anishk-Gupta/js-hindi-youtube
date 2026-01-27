// for of loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}
const greeting = "hello world !"
for(const greet of greeting){
   // console.log(greet);
}

// maps

const map = new Map()
map.set('in',"india")
map.set('usa',"america")
map.set('fr',"france")
map.set('in',"india")

//console.log(map);
// for(const key of map){
//     console.log(key);
// }


// for(const [key,value] of map){
//     console.log(key , ":-" , value)
// }

const obj = {
    game1 : "shaktiman",
    game2 : "superman"
}
// for(const [key,value] of obj){
//     console.log(key,value);  // objects are not iterable by this method
    
// }


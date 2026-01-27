const myObject = {
    js:"java script",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
// for in loop
for (const key in myObject){
   // console.log(`${key} ${myObject[key]}`);
}

const programming = ["js","c++","py","ruby"]
for (const key in programming){
  //  console.log(programming[key]);   
}


const map = new Map()
map.set('in',"india")
map.set('usa',"america")
map.set('fr',"france")
map.set('in',"india")

// for(const key in map){
//     console.log(key); // not iterable
    
// }
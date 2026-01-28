 // const coding = ["java","python","ruby","javaScript"]
// const values = coding.forEach( (item) => {
//     return item;
// })
//console.log(value); // undefined to upar wale tarike se koi value return nhi ho rhi hai

const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter( (value) => value>4 )
// const newNums = nums.filter( (value) => {
//     return value>4;  // yadi aap {} ye lagate hai tab aapko return likhna compulsory hai
// })
 // console.log(newNums);

 const newNums = [];
 nums.forEach( (value) => {
    if(value>4){
        newNums.push(value);
    }
 })
 console.log(newNums);
 
const customer = [
    {
        name : "anishk",
        age : 19,
        gender : "male",
        city : "jaipur"
    },
    {
        name : "harshit",
        age : 25,
        gender : "male",
        city : "bhilwada"
    },
    {
        name : "parth",
        age : 26,
        gender : "male",
        city : "nagore"
    },
    {
        name : "yashvi",
        age : 19,
        gender : "female",
        city : "jodhpur"
    },
    {
        name : "jahanvi",
        age : 22,
        gender : "female",
        city : "jodhpur"
    }
]
let obj = customer.filter((value) => value.gender==="female")
obj = customer.filter( (value) => value.age<21 && value.gender==="female" )
console.log(obj);


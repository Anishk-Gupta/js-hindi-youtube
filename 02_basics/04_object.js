const tinderUser = new Object(); // singleton
//const tinderUser = {}; not singleton
//console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email:"google@gmail.com",
    fullName : {
        userName : {
            firstName : "Anishk",
            lastName : "gupta"
        }
    }
}
//console.log(regularUser.fullName.userName.firstName);
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
//const obj3 = Object.assign({},obj1,obj2);
//const obj3 = {obj1,obj2};
const obj3 = {...obj1 , ...obj2}
//console.log(obj3);


const arr = [
    {
        name:"anishk",
        age:19
    },

    {
        gender:"male"
    }
]
//console.log(arr[0].name);
//console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // keys return karega in the form of arrays
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser)); // [[key,value],[key,value],[key,value]]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    name:"js",
    price:999,
    courseInstructor:"Jitesh"
}
// const {courseInstructor } = course; // destructureing
// console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);
 // json or api call is tarah ka dikhta hai
// {
//     "name" : "hitesh",
//     "price" : 898,
//     "courseName" : "js"
// }

// is tarah ka bhi dikhta hai
// [
//     {}
//     {}
//     {}
// ]
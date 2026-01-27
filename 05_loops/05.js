const coding = ["js","ruby","cpp","python","java"]

// coding.forEach(function (item) {
//     console.log(item); 
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=> {
   // console.log(item,index,arr);   
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "js"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})
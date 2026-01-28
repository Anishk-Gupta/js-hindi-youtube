const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNumber = myNumbers.map((num) => num + 10) // yaha filter ki tarah condition wala nhi hai jab koi condition ho to filter use kare
// lekin jab sab return karna ho to map use kare
const newNums = myNumbers
               .map( (num) =>num * 10)
               .map( (num) => num + 1)
               .filter( (num) => num>=40)
console.log(newNums);



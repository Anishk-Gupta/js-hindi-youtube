// reduce method

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currValue) {
//     console.log(`acc : ${acc} and currValue : ${currValue}`);
    
//     return acc + currValue
// } , 0)

// const myTotal = myNums.reduce((acc,currValue) => acc + currValue , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        course : "js",
        price : 2999
    },
    {
        course : "python",
        price : 999
    },
    {
        course : "mobile dev course",
        price : 5999
    },
    {
        course : "data scientist",
        price : 12999
    },
]
const total = shoppingCart.reduce( (acc,curr) => acc + curr.price , 0)
console.log(total);




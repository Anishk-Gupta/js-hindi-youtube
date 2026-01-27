// for loop 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i = 0 ; i<=10 ; i++){
//     console.log(i);
//     if(i==5){
//         console.log("5 is best number");   
//     }
// }

// for(let i = 0 ; i <= 10 ; i++){
//     console.log(`outer loop value : ${i}`); 
//     for(let j = 0 ; j<=10 ; j++){
//         console.log(`inner loop value : ${j}`);   
//     }
// }

// let myArray = ["nagraj","shaktiman","batman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        // break
        continue
    }
   console.log(`value of i : ${index}`);
}
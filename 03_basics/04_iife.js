// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);  
})();// ()=> first paranthesis to function ki defination ko and () => function execute ke liye
 // iife wo function hote hai jo immediate execute hote hain and kabhi kabhi global scope ke pollution ko hatane ke liye
 // last me semicolon lagana hai taki iife ko end kar sake

 ((name) => {
    // simple IIFE
    console.log(`DATABASE CONNECTED TWO ${name}`);
 })("hitesh");


 // ************EXECUTION CONTEXT AND CALL STACK ************ IMPORTANT TOPIC
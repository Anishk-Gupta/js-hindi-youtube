const heroes = ["shaktiman","nagraj","deol"]
const heroes1 = ["superman","batman","ironman"]
// heroes.push(heroes1)
// console.log(heroes[3][1])

// const all_heroes = heroes.concat(heroes1)
// console.log(all_heroes);

const all_new_heroes = [...heroes , ...heroes1] // spread operator
//console.log(all_new_heroes);

const new_array = [1,2,3,[4,5],6,7,[8,9,[10,11]]]
//console.log(new_array[6][2][1]);
const new_another_array  = new_array.flat(Infinity)
// console.log(new_another_array);

console.log(Array.isArray("anishk"))
console.log(Array.from("hitesh"));
console.log(Array.from({name:"gupta"})); // intersesting case

let score1 = 100
let score2 = 200;
let score3 = 300
const arr = Array.of(score1,score2,score3)
console.log(arr);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)   // add the array to the given array as it is

//Deep copy- Deep copy of an object is a copy whose properties do not share the same references
//Shallow copy- Shallow copy of an object is a copy whose properrties share the same references
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //add the array into the existing array in single array format
// console.log(allHeros);

// Spread operator
// use to concatinate multiple arrays
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// if you want to convert depth array into single one array you can use the flat operator
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

console.log("whats up niggers whats good ");

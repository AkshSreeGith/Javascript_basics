//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["hulk", "ironman", "thor"];

const myFunction = function(){
    console.log("Avengers Assemble");
}

let myObj = {
    name: "hitesh",
    age: 22,
    superName: heros, 
    superFunction: myFunction 
}
console.log(myObj);


console.log(id);
console.log(anotherId);

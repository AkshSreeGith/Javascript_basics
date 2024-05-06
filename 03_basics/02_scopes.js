"use strict";
// {} - scope

// global scope
let a = 20;
const b = 2;
var c = 500;

if (true) {
  // local scope or block scope
  let a = 10;
  const b = 20;
  console.log(a);
  var c = 30;
}

console.log(a);
console.log(b);
console.log(c);
//closure peoperties
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// function one(){
//     const user="pranav"
//     console.log("Enter")
//     two()
//     function two(){
//         const website = "youtube"
//         console.log(user)
//     }
//     console.log(website)

// }
// one()
// **************************************
// addone(2)//No error
// function addone(num){//function
//     return num+1
// }

// addtwo(4) // Error occur cause compiler do not what addtwo expression or variable is
// const addtwo = function(num){//expression
//     return num+2
// }

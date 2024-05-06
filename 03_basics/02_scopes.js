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

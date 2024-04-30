"use strict";

// Adding symbol to a object
const sym = Symbol("key1");

const myObj = {
  name: "Akshay",
  age: 20,
  email: "akshay@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Sunday"],
  [sym]: "mykey1", //It's important to use  [] brackets to use symbol as a key
};

// Adding function to an object
myObj.greeting = function () {
  console.log("Hellow Akshay welcome back!!!!");
};

// Accesing an object key-value pair
// First method
console.log(myObj.email);

// Second method (Correct way)
console.log(myObj["lastLoginDays"]);

console.log(myObj.greeting());

// Freezing object
// Object.freeze(myObj);

console.log(myObj[sym]);

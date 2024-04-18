"use strict";
 
const name= "Tyler ";
const lastName = "Durden";

// This is the old method that is used 
console.log("Hello my name is "+name+" and my last name is "+lastName);

// new up to date approach 
console.log(`Hello i am ${name} fuckin ${lastName}`);


let superHero = new String("Spiderman");
console.log(superHero);
superHero = superHero.toLowerCase();
console.log(superHero)

const gameName = new String('akshay-ak-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); proto is not recommended to use now in modern javascript 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   akshay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


// There are string methods in javascript which can be explored in javascript mdn documents 

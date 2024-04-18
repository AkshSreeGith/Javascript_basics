"use strict";
// Array 

// A array can contain multiple datatype
const arr= [1,2,3,"Akshay","name",true,false]
console.log(arr);

const arr2= new Array(1,2,3,"yo whats up")
console.log(arr2);
console.log(typeof(arr2));

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() Converts into string 

// console.log(myArr);
// console.log( newArr);

const newArr =[0,1,2,3,4,5]
console.log(newArr.slice(1,3));
console.log(newArr.splice(1,3)); // Removes the elements of the specified index of the array 
console.log(newArr);

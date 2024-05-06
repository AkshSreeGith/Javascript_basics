// function addTwonumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwonumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwonumbers(1, "4"); // if yo don't pass any parameter it will give you the output as Nan (Not a number)
// console.log(result);

// Arrow functions
const sayMyName = (yourName) => {
  console.log(`You're ${yourName}`);
};

// sayMyName(`Tyler Durden`);

// saymyname - Reference
// () - execute

// saymyname()

const sym = Symbol("new key");
const user = {
  name: "Akshay",
  age: 21,
  [sym]: "Latest key",
};

console.log(user[sym]); // Symbols can be accessed using square brackets only

function handleObject(anyobject) {
  console.log(anyobject.name);
  anyobject.age = 25;
  console.log(anyobject.age);
}

handleObject(user);

// We can also directly pass objects into the handle object function

handleObject({
  name: "Shruti",
  age: 21,
});

// Arrays wwith functions

a = [12, 23, 32, 12];

function getSecondValue(array) {
  return array[1];
}
// console.log(getSecondValue(a));

// Writing using arrow function with implict return
const getValue = (array) => console.log(array[1]);

// Directly passing array as a input to the fucntion
getValue([15, 45, 75, 45, 45, 78, 96, 96, 3, 4, 5, 5, 6, 2, 8]);

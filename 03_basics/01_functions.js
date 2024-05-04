// function addTwonumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwonumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwonumbers(1, "4"); // if yo don't pass any parameter it will give you the output as Nan (Not a number)
console.log(result);

// Arrow functions
const sayMyName = (yourName) => {
  console.log(`You're ${yourName}`);
};

sayMyName(`Tyler Durden`);

// saymyname - Reference
// () - execute

// saymyname()

//This - The this keyword refers to the context where a piece of code,
//such as a function's body, is supposed to run. Most typically, it is used in object methods, where this
//refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
const user = {
  name: "pranav",
  age: 32,
  welcome: function () {
    console.log(`Welcome ${this.name}`);
  },
};

//Quick question can i have a arrow function as the value for an object let's just try that out
const newUser = {
  name: "Tyler Durden",
  age: "idk",
  spouse: "Marla singer",
  personality: (person) => console.log(`I'm ${person}`),
};
console.log(newUser.personality("Akshay"));

console.log(user.welcome());

const a = function () {
  let username = "pranav";
  console.log(this.username);
};
a(); //Output - undefined

// const a = ()=>{
//     let username = "pranav"
//     console.log(this)
// }
// a() //Output - {}

// Arrow function
// () => {} ->Syntax
const add = (a, b) => {
  //basic arrow function
  return a + b;
};
console.log(add(3, 4));

//implicit return  - me man leta hu
// const addd = (a,b) => (a+b) //used for single line statement don't need to mention return statement
// console.log(addd(4,5))

// const forobject = () => ({name:"pranav"})
// console.log(forobject())

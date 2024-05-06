//IIFE (Immediately invoked function expression)
// ()() syntax
// to prevent it from global polution
// IIFEs allow you to create a private scope for your code. Variables declared inside the IIFE are not accessible from outside the function,

//always end it with semi colon (;)
(function db() {
  //named IIFE
  console.log("db connected");
})();

//Unnamed IIFR
(() => console.log("hello"))();

((name) => console.log(this.name))("pranav");

(function whoAreYou(name) {
  console.log(`Skyler i'm ${name}, I'm the one who knocks`);
})("Walter Hartwell White");

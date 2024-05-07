"use strict";

let hollywoodActresses = [
  "Mary Elizabeth winstead",
  "Scarlett Johansson",
  "Victoria Pedretti",
  "Gal Gadot",
];

// No need to use i<= sign bcoz the indexing of arrtay starts from 0 and the length of array is 4

for (let i = 0; i < hollywoodActresses.length; i++) {
  const element = hollywoodActresses[i];
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(" ");
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    const element = `${i} * ${j} = ${i * j}`;
    console.log(element);
  }
}

//Break and continue statements
for (let i = 1; i <= 10; i++) {
  if (i == 2) {
    console.log("Its a foul, but you can continue");
  } else if (i == 5) {
    console.log("It needs a break");
    break;
  }
  console.log(i);
}

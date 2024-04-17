"use strict";

console.log(null>0);
console.log(null==0); //false because == operator doesnt not convert null to zero
console.log(null>=0); //true because >= operator convert null to zero and 0>=0 right
console.log(null==undefined);

// Every operation with undefined return false except null ==undefined
console.log(undefined>0);
console.log(undefined==0); 
console.log(undefined>=0); 
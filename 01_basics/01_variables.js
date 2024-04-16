// Variables can be declared using let, const, var
// Even if you dont use let, const, var you can still declare a variable

const accountId = 068
let accounState="Maharashtra"
var accountPassword = "12345"
accountCountry="India"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accounState);

// Printing mutiple values at the same time
console.table([accountId,accounState,accountCountry,accountPassword])
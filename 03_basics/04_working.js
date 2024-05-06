// https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25

//javascript execution context
// {} -> Global execution context -> (this)
//Type of JEC(javascript execution context)
// 1. Global Execution context
// 2. Function Execution Context
// 3. Eval Execution Context

//Code phase(phase in which code is being executed)
//Memory creation phase(Creation phase)  like variable declaration and other declaration in memory
//Execution phase

// let a = 40
// let b= 5
// function add(a,b){
//     return a+b;
// }
// let result = add(a,b);
// console.log(result)
// phase - 1
//whenever the being gets to be executed first thing comes is global execution (global environment) allocated in this

//phase - 2 (memory phase)(first cycle)
//All the variable is declared but not initiazed (undefined value is initilized to all variable does not depend what kind of variable we have)
//for function it is defined (declared)

//phase - 3 (Execution phase) (second cycle)
//variable is initialized which is in code (values)
//for function a new variable environment and execution thread is created (memory execution phase and execution take place again for function as it is separate javascript code)

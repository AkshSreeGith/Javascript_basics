// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
//PREFIX POSTFIX
//THIS USUALLY OCCUR WHEN STRING START
//UNTIL THEN NUMBER IS ADDED
// console.log(1 + 3 + 4 + 4 + 2 + 2 + "2" + 2);
// console.log("2" + "3" + 2 + 4 + 2);
//Primitive data type
// String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference(non primitive)
// Arrays,object,function

// Stack primitive , Heap (Non primitive)
// Every String function is came from prototype (class)
// let a ="helllo world"
// console.log(a[0])
// console.log(a.__proto__)
// console.log(a.toUpperCase())
// console.log(a.indexOf("l"))
// console.log(a.slice(2,5))
// console.log(a.substring(5,1))
// console.log(a.search("h"))
// console.log(a.trim())

//12 - Number
// let a = 344.43
// let b = 10000000000000
// console.log(a.toFixed(1));
// console.log(a.toPrecision(2));
// console.log(b.toLocaleString("en-JA"))
// console.log(Math.ceil(a))
// console.log(Math.round(a))
// console.log(Math.floor(a))
// console.log(Math.min(2,3,4,3))
// console.log(Math.max(3,4,5,6))
// //Random

//13 -  DATE
// let a = new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toDateString())
// console.log(a.toTimeString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())
// console.log(a.getTime())
// console.log(a.getUTCFullYear())
// let b = Date.now()
// console.log(b.toString())
// let a = new Date();
// a.toLocaleDateString('default',{
//     weekday:"long",

// })
// console.log(a)

//14 - Arrays
//Deep copy- Deep copy of an object is a copy whose properties do not share the same references
//Shallow copy- Shallow copy of an object is a copy whose properrties share the same references
// const a = [0,1,2,3,4,5,6,7]
// console.log(a)
// console.log(a.at(3))
// console.log(a.pop())
// console.log(a.push(3))
//console.log(a.shift()) //no argiment
//console.log(a.unshift(3))
// console.log(a.includes(99))//return boolean whether number is in array or not
// console.log(a.join())
//Slice - In Slice the range gets copied and returned while the original array remaine same
//splice - In Splice the range from which it is ranged get return from original array mean it remove all element from that original array
// let b = a.splice(2,5)
// console.log(b)
// console.log(a)

//15 - Arrays
// let a = ["ironamn","thor","hulk"]
// let b = ["superman","flash","cyborg"]
// console.log(a.concat(b))
// console.log(...a,...b)//... spread the element in array and work as indiviual string
// let c = [1,2,3,[5,6,7,[5,4,3,2]]] // get all the element from deepth of an array
// let d = c.flat(Infinity)
// console.log(d)
// console.log(Array.isArray(b))
// console.log(Array.from("Pranav"))

//16 - Objects

//Singleton - created from constructor when created for liberal approach singleton does not create
//Object.create -- This is how object is created from constructor

//object literals
// const a = {
//   name: "pranav",
//   age: 13,
//   location: "jaipur",
//   email: "me@google.com",
//   Date: "today",
// };
// console.log(a);
// //Both the way is correct but always use the second method
// console.log(a.age)
// console.log(a["age"])//always use this method
// a["name"] = "adarsh"
// Object.freeze(a)//<-- it freeze the object mean no value will be change after it gets freezed
// a["name"] = "pranav"
// console.log(a)

//TO declare symbol
// const mysym = Symbol("Key1")
// const a = {
//   name: "pranav",
//   [mysym]:"mykey", //<--this is how symbol is given in object
//   age: 13,
//   location: "jaipur",
//   email: "me@google.com",
//   Date: "today",
// };
// console.log(a[mysym])//<-- THis is how it is used
// console.log(a)

//declaring function and using in objects
// a.greeting = function(){
//     console.log("hello user")
// }
// console.log(a.greeting())
// console.log(a)

//17 -  Objects Part-2
//const user = new Object() //<-- singleton object
// const regularuser = {
//   email: "me@gamil.com",
//   username: {
//     name: "pranav",
//     sirname: "mishra",
//     middlename: "vindo",
//   },
// };
// const user = {};
// user.id = "21233";
// user.name = "pranav";
// user.isloggedin = false;
// user.detail = regularuser; // adding nested object
// console.log(user);
// console.log("***********");
// console.log(Object.assign({}, user, regularuser)); //merge or assign both objects in single one
// console.log(Object.keys(user)); //gets keys also can be used to extract value by getvalues
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("email"))

//18 - Objects Part - 3
//Destructure
// const course = {
//     cousrname : "js",
//     price :"999",
//     instructor:"pranav"
// }
//THis is used to get the key:pair pair
// const {instructor} = course
// we can use name instructor to change or print the value of that object without using dot method

//Here instructor:a is given which mean now i can use a for access  value in object using variable name a
// const {instructor:a} = course
// console.log(a)

//19 - Function and parameter
// function - keywords
// saymyname - function name
// ()() = Syntax

// function saymyname(){
//     console.log("hello")
// }

// saymyname - Reference
// () - execute

// saymyname()

//20 Function with objects and array
//rest operator ... -> function calculate(...num) Used for arrays its like have different argument
// const user = {
//     name:"pranav",
//     age:"12"
// }
// function handleobject(anyobject){
//     console.log(anyobject.name)
//     anyobject.age=34
// }
// handleobject(user)
// console.log(user)
// handleobject({
//     name:"adarsh"
// })

//21 - Global and local scope
//{} - scope
//global scope
// let a = 20
// const b = 2
// var c = 500

// if(true){
//local scope
// let a = 10
// const b = 20
// console.log(a)
// var c = 30}

// console.log(a)
// console.log(b)
// console.log(c)

//22 - scope level and mini hoisting
//closure peoperties
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// function one(){
//     const user="pranav"
//     console.log("Enter")
//     two()
//     function two(){
//         const website = "youtube"
//         console.log(user)
//     }
//     console.log(website)

// }
// one()
// **************************************
// addone(2)//No error
// function addone(num){//function
//     return num+1
// }

// addtwo(4) // Error occur cause compiler do not what addtwo expression or variable is
// const addtwo = function(num){//expression
//     return num+2
// }

//23 - This and arrow function
//This - The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
// const usee = {
//     name :"pranav",
//     age:32,
//     welcome:function(){
//         console.log(`Welcomee ${this.name}`)
//     }

// }
// console.log(usee.welcome( ))
// const a = function(){
//     let username = "pranav"
//     console.log(this.username)
// }
// a() //Output - undefined

// const a = ()=>{
//     let username = "pranav"
//     console.log(this)
// }
// a() //Output - {}

//Arrow function
// () => {} ->Syntax
// const add = (a,b) =>{ //basic arrow function
//     return a+b
// }
// console.log(add(3,4))

//implicit return  - me man leta hu
// const addd = (a,b) => (a+b) //used for single line statement don't need to mention return statement
// console.log(addd(4,5))

// const forobject = () => ({name:"pranav"})
// console.log(forobject())

//24 - IIFE (Immediately invoked function expression)
// ()() syntax
// to prevent it from gloval polution
//always end it with semi colon (;)
// (function db(){//named IIFE
//     console.log('db connected')
// })();

// //Unnamed IIFR
// (()=>console.log("hello"))();

// ((name)=>console.log(this.name))("pranav")

//25 - How does javasscript excute code + call stack

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

//26 - Control Flow
// if else , arithmetic operator,logical operator, && ,||,===,!==,switch case
// truthy and flasy
// Nullish Coalescing Operator (??) : null undefined
//val = 5 ?? 10
//This is usally used for variable where is 5 is not available than 10 is assigned and vice versa , if first value is null then the value next first will be declared (null ?? 13)

//Terniary Operator - Condition ? true : false

//27 - For loop with break and continue(iterators)
//Break - break the loop
//continue - step that particular condition
// for(let a =1;a<10;a++){
//     //operation
// }

//28 - while and do while loop
// while(){
////Operation
// }

// do{
// //Operation
// }while()

// let a =1
// while(a<10){
//     console.log("while")
//     a++
// }

// let b=0
// do{//will execute code atleast one time
//     console.log("do while")
//     b++
// }while(b<0)

//29 - High Order Arrays loops

// const a = [1,2,3,4,5,6,7]
// for (const i of a) {//Print value
//     console.log(i)
// }
// for (const i in a) {//Print index
//     console.log(i)
// }

// const map = new Map()
// map.set("mumbai",2000)
// map.set("dellhi",2e000)
// map.set("kolkata",20400)
// map.set("prayagraj",24000)
// map.set("pune",23000)
// map.set("mumbai",400)
// console.log(map)
// for(const i of map){
//     console.log(i)
// }
// for(const [key,value] of map){
//     console.log(value)
// }
// for(const [key,value] of map){
//     console.log(key)
// }

// const temp = {
//     name:"pranav",
//     sirname:"mishra"
// }
// for(const i of temp){//TypeError: temp is not iterable
//     console.log(i)
// }

// const temp = {
//     name:"pranav",
//     sirname:"mishra",
//     age:21,
//     college:"bhavans"
// }
// for (const key in temp) {
//    console.log(temp[key]) //if temp.key then value will return undefined
// }

//forEach
// const coding = ["js","c++","java"]
// coding.forEach((element) => { //element is the value when we have to retrieve also we ccan replace it with function like (function(item){operation})
//     console.log(element)
// });

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
//     //Output
//     // js 0 [ 'js', 'c++', 'java' ]
//     // c++ 1 [ 'js', 'c++', 'java' ]
//     // java 2 [ 'js', 'c++', 'java' ]
// });

// const a = [
//     {
//         name:"pranav"
//     },{
//         name:"adarsh"
//     },{
//         name:"ashlok"
//     }
// ]
// console.log(a)
// a.forEach((item,index,arr)=>{
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// });

// 30 - Filter map and reduce & some arrays

//Filter - The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//In simple words it filter array without changing original value based on condition given in it , it is defined in function way
// const coding = ["js","c++","java","rudy","python","php"]
// console.log(coding)
// let b = coding.filter((item)=>item.length<3) // can also be used in nested object array
// console.log(b)

//map
// const num = [1, 2, 3, 4, 5, 6, 7];
// const a=num.map((num)=>num+10) //have to take another variable cause it does not change original elements
// console.log(a)

//chaining - mean using multiple function on single variable
// const num = [1, 2, 3, 4, 5, 6, 7];
// const b = num.map((num) => num + 10)
//              .map((num) => num + 1)
//              .filter((num)=>num>=14);
// console.log(b)

//Reduce - The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//Reduce can be used for adding values in shopping cart
// const num = [1,2,3,4,5,6,7,8,9,10];
// const initialvalue = 0
// const c = num.reduce((a,b)=>{
//     console.log('a = ',a);
//     console.log('b = ',b);
//     return a+b
// },7)
// const mytotal = num.reduce((a,b)=>a+b,0)
// console.log(c)
// const course = [
//   {
//     price: 1,
//   },
//   {
//     price: 2,
//   },
//   {
//     price: 3,
//   },
// ];
// const total = course.reduce((acc, item) => item.price + acc, 0);
// console.log(total);

//31 - DOM introduction
//console.log(window.document)
//Usually document is commonly used so we can easily use document (console.log(document) in which it has multiple operation that could be used like jquery,baseURL and properties for DOM manipulation)
//DOM manipulation can be done using (document.nameoftheproperty().innerHTML() ()<- any type of selecting or changes that we want to do in our page)
//Example document.getELementById("firsthead").innerHTML("<h1>hello</h1>") <- This will change the inner attribute and value of that selected attribute

//32 - All DOM selectors NodeList and HTMLCollection

//DOM manipulation can be done using different type of selector
//Example :
//          getELementByID(),getElementByClassName() and many more

//Also we can get the name and id and atribute of the HTML by using different type of selector
//Exmaple : getElementById().id  <--- this will give us id of that particular mentioned id and if we replace .id to ClassName it will give us class name

//To change the element within selected element we can use different type of selector to select than change the inner HTML
//Example
//      getElementById().getAttrribute() <-- this is used to get the attributeof that particular id also we can set the attribute of the following id by using the .setAttribute()
//      query.Selection() <-- This is most connly used for selected element cause it can element by either way class,id,attribute name any type of selector name can be used (for id we use = #)(for class we simply use .)and thus we can also select more element using different name
//      innerHTML - this gives all html inside selected id
//      innerText - this will return text inside the DOM which is visible
//      innerContext - this will return all the text inside the that particular HTML whether they are hidden or not

//  let say we select an element and stored it in a const variable then we can style it using
//  a.style.backgroundColor ="green" <<---- this is how we can select an element and change inner html

// for Nodelist we can use forEach to select

//to convert Node list to array we can use it using
//  Array.from(nodelistname) <--- it will convert the Nodelist to array
//Thus after converting it into array  we can alter the innerHTML

//33 - How to create a new element in DOM (Document Object Model)
// Relation
// https://www.youtube.com/watch?v=xAvTgCsCHLs
// In this we can manioulate HTML (DOM MANIPULATION)
// we can select different element and select or appendchild in that particular element
//
// const div = document.createElement("div"); <--- here it createElement div which can be used for insert more elment and attribute
// div.className = "main";                  <------ It set the Class Name of the following selected element
// div.id = Math.round(Math.random() * 10 + 1);  <--- gives id
// div.setAttribute("title", "getting"); <-- used to set attribute title=getting
// // div.innerHTML = "pranav mishra"  <------ inner html that it text in it
// const a = document.createTextNode("pranav msihra");
// div.appendChild(a);    <--- append it to div
// document.body.appendChild(div); <--- now append it to document body
//
//we can use different type of relation selector
// for example for child
//      firstChildELement,lastChildElement,nextChildElement
//similarly we can get parent of particular child element
//for example parentNode,parent

//also while selecting this we can also change inner html and change it dynamicaally using different selector

//34 -  Edit and remove ELement in DOM
// In this we will get to know how to add , edit , replace, edit html dynamically using different selector
// for example
// replaceWith,outerHTML
// please learn DOM manipulation more seriously

//35 - Project
// 4 projects
//create project as many as you can in 5 days

//36 - Events  - https://www.youtube.com/watch?v=_ALUMTa8BAE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=36
//attachEvent
//jQuery

/* <div>
<ul id="images">
  </li>
  <li><img width="200px" id="photo" src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"></li>
  <li><img width="200px" id="photo2" src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"></li>
  <li><img width="200px" id="photo3" src="https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"></li>
  <li><img width="200px" id="photo4" src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"></li>
  <li><a style="color: white;" href="https://google.com">Google</a></li> 
</ul>
</div> */

//Object which is created by addEventlistener has number of prototype in it which can be used for manipulation of screen
// document.getElementById('photo').addEventListener('click',function(e){
// console.log(e)
// },false) false is default

// true - for capturing mode

//Study this topics
// Type,timestamp,defaultprevented,target,toelement,srcElement,currentTarger
// clientX ,clientY , screenX,screeny
// altkey ,ctrlkey,shiftkey,keycode

//EventPropogation  - bubbling
//EventBubbling (false)- This usually mean how bubble work from down to top
//EventCapture mode (true)- This is opposite of that
//e.stopPropagation() - is used to stop this bubbling so no other action associated at top should not trigger

// for links
// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google")

//  },false);//default false

// When using function an object is created e
// if we console that onn browser we will get to see many properties of that which can be used to checkout properties
// e.target is one of the properties which is used to get multiple properties
// e.target.parentNode - thus there is many other properties which can be used for same particular action
// document.querySelector('#images').addEventListener
// ('click',function(e){
// console.log(e.target.parentNode)
// let rm = e.target.parentNode
// rm.parentNode.removeChild(rm)
// });

// 37 - Asynchronus code - https://www.youtube.com/watch?v=zgt5oTD3rRc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=37
// javascript - single thread(synchronous) <---- Default javascript

// Execution Context

// Blocking Code  vs Non-Blocking code

// Blocking COde -> Block the flow of program (Read file sync)
// Non Blocking Code -> Does not block Execution code (Read File Asyn )
// js engine does only has memory ,call stack whenever code start it gors to WEP API which has DOM API which register request and send it to queue which goes to call stack

// 38 - project with Async js

//  const changeme = setTimeout(()=>console.log('hello'),1000)
//  document.querySelector('#stop').addEventListener('click',()=>{
//    clearTimeout(changeme)
//    console.log('stopped')
//  })

//  setTimeout -> to set Timeout which will occur once after certain time
//  setInterval -> to set interval which will  occur again and again after certain time

//we can also clear setinterval and timeout using clearInterval and clearTimeout
// const changeme = setInterval(()=>console.log('hello'),100)
// document.querySelector('#stop').addEventListener('click',()=>{
//   clearTimeout(changeme)

// })

//Unlimited Color projet
// for clearInterval also take variable as let
//go through all project

//39 - API request and V* engine
//api.github.com/users/praannavv
//randomuser.me  -> jsonformatter  - used to formate API

//xmlHttpRequest
// 0 UNSENT - client has been created open() not called yet
// 1 OPENED - open() has been called
// 2 HEADERS_RECEIVED - send() has been called , and headers and status are available
// 3 LOADING - Downloading responseText holds partial data
// 4 DONE - TH operation is complete

// const requesrturl = 'https://api.github.com/users/praannavv'
// const xmr = new XMLHttpRequest()
// xmr.open('GET',requesrturl) <--- GET and url

// xmr.send(); <-- Send request message
// xmr.onreadystatechange = ()=>{  <-- on readystatechange usally give changes in our state from 0 to 4
//   console.log(xmr.readyState)
//   if(xmr.readyState === 4){ <--- if 4 mean it is success then do my operation whatever operation it is
//     const data = JSON.parse(xmr.responseText) <-- data send by api is string so convert it to object
//     a=data.avatar_url <- use object to retreive or relative information
//     console.log(data.avatar_url)

//   }
// }

//So we can easy access API using XMLHttpRequest() which is used as to request api from our api provider
//requesturl usually consist of API url while retrieving API it usally provide us string which is been parsed using JSON.parse , creating an object then use that object to retrieve our information form it

// 40 - Promise
//A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
// const promiseOne =  new Promise((resolve,reject)=>{
//   //Do an anync task
//   //DB calls,cryptography,network
//   setTimeout(()=>{resolve()
//     console.log('async task is complete')},1000)
// });
// promiseOne.then(()=>{
//   console.log("promise consumed")
// })

// //another way without using any variable

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{console.log("async 2 ")
//    resolve()},1000)
// }).then(()=>{
//   console.log("finished resolved")
// })

// //Promise -2
// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({username:"chai",email:"mail@gmail.com"})
//   },1000)
// })

// promise3.then((user)=>{
//   console.log(user)

// })

// new Promise(( resolve,reject)=>{
//  setTimeout(() => {
//   let err = true
//   if(!err){
//     resolve({username:"pranav",email:"afdfad"})
//   }else{
//     reject('Error something went wrong')
//   }
//  }, 1000);
// }).then((user)=>{
//   console.log(user);
//   return user.username
// }).catch((user)=>{
// console.log(user)
// })

// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let err = true
//       if(!err){
//         resolve({username:"pranav",email:"afdfad"})
//       }else{
//         reject('Error something went wrong')
//       }
//   },1000)
// })

// const a = promise3.then((user)=>{
//   console.log(user)
//   return user.username

// })
// console.log(a)
// will throw error
// node:internal/process/promises:289
//             triggerUncaughtException(err, true /* fromPromise */);
//             ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error something went wrong".] {
//   code: 'ERR_UNHANDLED_REJECTION'

//TO resolve this we use chaining (then)

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;
//     if (!err) {
//       resolve({ username: "pranav", email: "afdfad" });
//     } else {
//       reject("Error something went wrong");
//     }
//   }, 1000);
// });

// const a = promise3
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => { // Here another then is given it is used to get the value from the above resolve() which is in that parameter
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=>console.log('promised is either resolve or rejected'))

// const promise5 = new Promise((resolve,reject)=>{
//   let err = false;
//     if (!err) {
//       resolve({ username: "pranav", password: "afdfad" });
//     } else {
//       reject("Error js went wrong");
//     }
// })

// async function consumepromise(){
//   try{
//    const response = await promise5
//    console.log(response)}catch(err){
//     console.log(err)
//    }
// }
// consumepromise()

// async await , where we have used asunc we must have to use await , why do we have to do it?
//async only words asynchrnous ly and wait until the await operation is not fully completed

//https://jsonplaceholder.typicode.com/users

// async function getalluser(){
//  try{ const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json() //cause convertion also takes time
//   console.log(data)}catch(err){
//     console.log("err")
//   }
// }
// getalluser()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//   return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })

// learn async await properly

// 41 - Now we can know fetch in js
// Syntax - fetch()
// Is a feature which creates a special queue (microtask queue,priority queue)

//fetch() goes two way
//One goes for web browser/node native  -> network request > goes->(onfulfield) or does not->(onRejection)

//Second goes to reetreive space in memeory and have two array (onfulfield[]  -> resolution of resolve) and onRejection[] rejection)
//Both onfulfield and onrejection have function in it which is used to fulfill data and that data goes to global memeory (response) which is used

// 42 - Object Oriented in Javascript
// it soes not have javascript and was there in ES6
//it has prototype- based lanuage and its classes are primarily synatactic sugar over exisiting prototype based inheritance mechanisms

// OOP - programmming paradym (Object Oriented Programming)
// - Collection of properties and method

//Object literal - literally mean creating an object

// const user = {
//   username:"pranav",
//   logincount:0,
//   singnedIn : true,

//   getuserDetails : function(){
//     console.log(`${this.username}`)
//     console.log(this)

//   }
// }
// console.log(user.getuserDetails())

//Constuctor function

// function user(username,login){
//   this.username = username,
//   this.login = login

//   //return this --> implicit (automaticcally done )
// }
// const user1 = new user('pranav',true) // new mean new instance if we don't give new than our data will be override
// const user2 = new user('adarsh',true)
// console.log(user1 instanceof user)
// console.log(user1.constructor)
// console.log(user2.username)

// 43 - Magic of Prototype in javascript

// Array -> object -> null
// string -> object -> null
// function -> object ->null

// function print(num){
//   return num
// }
// console.log(print(4))
// console.log(print.power = 3)
// console.log(print.prototype)

// function createuser(username){
//   this.username = username
// }
// createuser.prototype.incre = ()=>{   //prototype.functionname = ()=>{} is used to inject our own prototype
//   this.username=this.username+1
// }
// const a = new createuser(4) //<--- without new it would not read property
// a.incre()
// console.log(a)

/*
Here's what happens behind the scenes when the new keyword is used

A new object is created : The new keyword initiates the creation of a new javascript object

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function.This mean that it has access to properties and method defined o the constructo's prototype

The Cnstructor is called: The constructor function is called with specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor , javascript assumes this,
the newly created object,to be the intended return value

The new object is returned: After the constructor function has been called,if it doesn't return a non-primitive value (object,array,function,etc.)
the newly created object is returned
*/

//prototypes

// let myname =  "pranav      "
// console.log(myname.prototype.truelength)

// let myhero = ["thors", "spiderman"];
// let heropower = {
//   thor: "hamer",
//   spiderman: "sling",
//   getspiderpower: function () {
//     console.log(`spiderman powe is ${this.spiderman}`);
//   },
// };
// //favtoryfunction
// Object.prototype.pranav = function () {
//   console.log("im here");
// };
// heropower.pranav();

//we can also give properties to specific type such as Array ,string
//Example Array.prototype.name = ()=>()

//Inheritence
// const teacher ={
//   a:true
// }
// const b = {
//   b : false
// }
// const tt={
//   maks:'affa',
//   __proto__:teacher
// }

// //Modern syntax
// Object.setPrototypeOf(teacher,tt)

//Instances (new,this)

//44 -  Call and this in js
// https://www.youtube.com/watch?v=-owpuf4lbyU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=44
// function SetUsername(username){
//   this.username = username
//   console.log('called')
// }
// function creatuser(username,password){
//   SetUsername.call(username)
//   this.password = password
// }
// const chai = new creatuser('chai','pani')
// console.log(chai)

// OUTPUT
// called
// creatuser { password: 'pani' }

// function SetUsername(username){
//   this.username = username
//   console.log('called')
// }
// function creatuser(username,password){
//   SetUsername.call(this,username) //<-- without this the context of the stack which when get execute gets removed from stack without passing out the value it contains
//   this.password = password
// }
// const chai = new creatuser('chai','pani')
// console.log(chai)

// output
// called
// creatuser { username: 'chai', password: 'pani' }

// 45 - Class constructor and static

//ES6
// class User{
//   constructor(username,password){
//     this.username=username;
//     this.password=password;
//   }
//    encryptpassword(){
//   return `${this.password}abc`
//   }
//   changeusername(username){
//     this.username=username
//     return `${this.username.toUpperCase()}`
//   }

// }
// const user = new User("ppranav","password")
// console.log(user.encryptpassword())
// console.log(user.changeusername("adarsh"))

//Inheritence

// class User{
//   constructor(username,password){
//     this.username=username;
//     this.password=password;
//   }
//    encryptpassword(){
//   return `logged in ${this.password}abc`
//   }
//   changeusername(username){
//     this.username=username
//     return `${this.username.toUpperCase()}`
//   }

// }
// class Teacher extends User{//<---- Extent to inherit User in Teacher
//       constructor(username,password,email){
//         super(username,password);
//         this.emai=email
//       }
//       loginfo(){
//         console.log(super.encryptpassword())
//         console.log(`${this.email}`)

//       }
// }

// const u = new Teacher('pranav','pranav','pranav@gmail.com');
// u.loginfo()

// console.log(u instanceof Teacher)

//Static
//Stop access from inherited Class

// class User{
//   constructor(username,password){
//     this.username=username;
//     this.password=password;
//   }
//    encryptpassword(){
//   return `logged in ${this.password}abc`
//   }
//   static changeusername(username){
//     this.username=username
//     return `${this.username.toUpperCase()}`
//   }

// }
// class Teacher extends User{//<---- Extent to inherit User in Teacher
//       constructor(username,password,email){
//         super(username,password);
//         this.emai=email
//       }
//       loginfo(){
//         console.log(super.encryptpassword())
//         console.log(`${this.email}`)

//       }
// }

// const u = new Teacher('pranav','pranav','pranav@gmail.com');
// u.loginfo()
// u.changeusername("jdfs")
// Error
// // u.changeusername("jdfs")
// // ^

// // TypeError: u.changeusername is not a function

// 46 - Bind in js
//https://www.youtube.com/watch?v=75dMiOY_4ac&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=46

// Repeat this topic

// 47 - Now You Knnow Objects in js

//sometimes we cannot set some properties cause if does not allow overwrite

//Object.getOwnPropertyDescriptor
// console.log(Math.PI)
// const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')  //<------ it gives properties defined for particular thing

// console.log(descriptor)
// OUTPUT
// {
//   value: 3.141592653589793,
//   writable: false,  <--- writable = false thus we cannot change the value in it
//   enumerable: false,
//   configurable: false
// }

//Create your own object
// const chai = {   //here we have created an object in which we will set writable as false in other world we will modify properties
//   name:"ginger chai",
//   price:250,
//   isAvailable : true,
//   object : function(){console.log('hello')}
// }
// console.log(chai) //same chai object
// console.log(Object.getOwnPropertyDescriptor(chai,'name')) //CHecking our properties of name
// Object.defineProperty(chai,'name',{ //Here we can defining in other words we are modifing properties
//   writable:false, //Properties
//   enumerable:true //Properties
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name')) //again when we print this the writable is now false me we cannot change default value
// chai.name = "pranav" //Trying to change value
// console.log(chai) //same default objext cause it is not writable

// for (let [key,value] of Object.entries(chai)) {
//   if(typeof value !== 'function'){ // enumerable:false - if it is false when iteration is not possible
//   console.log(`${key}:${value}`)}
// }

// 48 - Getter Setter and stack Overflow
//https://www.youtube.com/watch?v=t6vLhF-iSxQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=48

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }
//   //Name of the getter setter should be same as variable in constructor
//   //So while creating it, it is easily can be understood also we can have any name of variable in it which work to set or get that particular which is it used with
//   get password() {
//     //<-- used to get outside of class and if there is get then there should be set and vice versa
//     return this._password;
//   }
//   set password(value) {
//     this._password = value; //RangeError: Maximum call stack size exceeded
//   }
//   get username(){
//     return this.a
//   }
//   set username(a){
//     this.a = a
//   }
// }

// const user = new User("pranav", "213");
// console.log(user.username);

//way to set Properties (old) <- not neccesaay but should know

//49 - Lexical scoping and closure

//Lexical scoping
//inner child can get parent variable but parent cannot cannot child variable
//Closure
//do it properly

//50

// 51 - More about Array

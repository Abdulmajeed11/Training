// example 1a:

var a = require('./eg2.js').myObj          
console.log(a.a,'1')                     //Calling the value from other file gives 30
 console.log(a.setA(20),'2')             // setting the value to 20, valuue changes to 20
  // a.a = 20
// console.log(a)         // This will also change the value of a to 20

  console.log(a.data,'3')     // checking if the value is set to 20
 console.log(a.getA(),'4')     // getting the value 

// O/p:30 '1'
//     20 '2'
//     20 '3'
//     30 '4


// Note : when we tried to call getA() we got the output as 30 instead of 20, this is beacuse the scope of the 
// variables are different 

// example 1b:
var myModule = require('./eg2.js').myObj;                   
var value = 0;

console.log(myModule.data)
myModule.set(35);
console.log("myModule.data:", myModule.data);
myModule.data = 20
console.log(myModule.data)
console.log("myModule.get():",myModule.get());
console.log(myModule);

// O/p: 10
//      myModule.data: 35
//      20
//      myModule.get(): 20
//      { data: 20, set: [Function: set], get: [Function: get] }

// Example 2:

var a = require('./eg2.js').myObj          
console.log(a.str,'1')                     //Calling the value from other file gives hello
 console.log(a.setA('world'),'2')             // setting the value to 20, valuue changes to world
//   a.str = 'world'
// console.log(a.str)         // This will also change the value of a to world

  console.log(a.data,'3')     // checking if the value is set to 20
 console.log(a.getA(),'4')     // getting the value 


// O/p: hello 1
//      world 2
//      world 3
//      hello 4


var a = require('./eg2.js').myObj          
console.log(a.name,'1')                     //Calling the value from other file gives hello
 //console.log(a.setA('world'),'2')             // setting the value to 20, valuue changes to world
   a.name.firstName = 'abd'
 console.log(a.name.firstName)         // This will also change the value of a to world

 // console.log(a.data,'3')     
 console.log(a.getA(),'4')     // getting the value 

 // O/p:  { firstName: 'Abdul', lastName: 'Majeed' } '1'
 //        abd
 //       { firstName: 'abd', lastName: 'Majeed' } '4'

 
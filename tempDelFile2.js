// var File = require('./tempDelFile.js')
// console.log(File.modifyA(10))        // o/p: 10 
// console.log(File.getA())             // o/p: 10
// var fileObj = new File()
// console.log(fileObj.modifya(20))    // o/p:  File is not a constructor
// console.log(fileObj.getA())

// // Note: the above example was done using function 


// var f = new File(5);
// console.log(f.first())
// console.log(f.second())

// above example was done using class and export 

//const User = require('./user.js');
// let user = new User();
// console.log(user.User)



// var userFile = require('./tempDelFile.js');
// var User = userFile.User();


// "use strict";                                           // working
// var Mathh = require('./tempDelFile.js');

// var calc = new Mathh(3,4);

// console.log("addition of operands is: " + calc.add());
// console.log("subtraction of operands is: " + calc.subtract());
// console.log("multiplication of operands is: " + calc.multiply());
// console.log("quotient on dividing operands is: " + calc.divide());
// console.log("remainder on dividing operands is: " + calc.remainder()); 

// var file = require('./tempDelFile.js')
// console.log(file.a())


// module.exports.changeNum = () => {
//     process.num = 3;
//     console.log("file2", process.num);
// };


// var f = require('./tempDelFile.js')
// var a = 10;
// console.log(a);


// var file2 =  require('./tempDelFile.js')
// console.log(file2.modA(20));


// var a = require('./tempDelFile.js').myObj
// console.log(a.a,'1')
//  // a.a = 20
// // console.log(a)
//  console.log(a.setA(20),'2')
//  // console.log(a.a,'3')
//  console.log(a.getA(),'4')


// var Point = require('./tempDelFile.js');
 
// var pyth = new Point(3, 4);
// console.log(pyth.distance());

// var helloWorldA = require('./tempDelFile.js');
// var helloWorldB = require('./tempDelFile.js');
// // Change the value of 'greeting' from "Hello, World" to "Hi"
// helloWorldA.greeting = "Hi";
// // Outputs "Hi" twice
// console.log(helloWorldA.greeting);
// console.log(helloWorldB.greeting);





// var a =10;
// function modifyA(ab)
// {
//   a = 20;
// }
// modifyA()
// console.log(a)

// var a = require('./tempDelFile.js').myObj          //working
// console.log(a.a,'1')
//  // a.a = 20
// // console.log(a)
//  console.log(a.setA(20),'2')
//  console.log(a.data,'3');
//  // console.log(a.a,'3')
//  console.log(a.getA(),'4')



// var myModule = require('./tempDelFile.js').myObj;                   //working
// var value = 0;

// console.log(myModule.data)
// myModule.set(35);
// console.log("myModule.data:", myModule.data);
// myModule.data = 20
// console.log(myModule.data)
// console.log("myModule.get():",myModule.get());
// console.log(myModule);




// var t = require('./tempDelFile');
// console.log(t.temp(34));
// console.log(t.temp('abdul majeed'))



// var j = require('./tempDelFile.js')
//   module.exports.Counter = {                              //check
//     count: 1,
//     add: function() {
//      this.count += 10;
//     },
//     remove: function() {
//         this.count -= 10;
//     }
// }
// console.log('first')
// console.log(j.temp(),'1')



// var a = require('./tempDelFile.js').myObj          
// console.log(a.a,'1')                   
//  console.log(a.setA(20),'2')            
//    a.a = 20
// // console.log(a)         

//   console.log(a.data,'3')    
//  console.log(a.getA(),'4')     
// // O/p:30 '1'
//     20 '2'
//     20 '3'
//     30 '4



// exports.a = function()
// {
// 	console.log('hi')
// }

// exports.a()

// var start = exports.start = function() {
//    console.log(' in start of sender.js');
// };

// exports.start

//...............

// var t = require('./tempDelFile.js')
// console.log(t.a)
// console.log(t.b)                             // aa
// console.log(t.obj.first)
// t.first();
// t.second();

//..................
// var h = require('./tempDelFile.js')
// console.log(h.a)
// console.log(h.b)
// console.log(h.name)
// console.log(h.addr)
// console.log(h.temp(4))
//console.log(h.temp2(5))   // will give error as the function is not exported


// O/p:  10
//       undefined
//       { first: 'abdul', last: 'majeed' }
//       undefined
//       4


//..........................
// creating objects for exporting variable 

var h = require('./tempDelFile.js')
//    util = require('util');
 console.log(h.a)
// var x = Object.create(h.name)
//console.log(x.name)

var y = new Object(h.name)
// y.name = 'abdul'
console.log(y.first + ' ' + y.last)

// util.inherits(h)

var z = new h.Temp(6)
  //console.log(z.Temp(6))
  // z.Temp.prototype.a = function(e){
  // 	return e;
  // }

console.log(z.p(5))





// var h = require('./tempDelFile.js')
// console.log(h.a)
// console.log(h.b)
// console.log(h.name)
// console.log(h.addr)
// console.log(h.temp(4))
//console.log(h.temp2(5))   // will give error as the function is not exported




// var p = require('./tempDelFile.js')


// var b = new p.Person()
// console.log(b)
// console.log(b.name)

// var k = new p.temp()
// console.log(k.temp())
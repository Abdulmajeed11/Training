
// var a = 10;
// exports.modifyA =function(p){
//   a = p
//   return a;
// }
// exports.getA =function(){
//   return a;
// }

  
//   class A { 
//   constructor(p){
//     var 
//      this.p = p;
//     //   var a = 10; 
//     // a = p
//     // return a;
//   }
//   first(){
//     return this.p; 
//   }
//   second(){
//     console.log('Hello')
//   }
// }

// module.exports = A;


// class User {
//   constructor(){
//     this.name = 'abdul';
//     return this.name;
//   }
//   };

// module.exports = User;

// exports.User = function(){
//   console.log('hi');
//   }


// "use strict"            //working 

// class Mathh{
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//   add(){
//     return this.x + this.y;
//   }
//   subtract(){
//     return this.x - this.y;
//   }
//   multiply(){
//     return this.x * this.y;
//   }
//   divide(){
//     return this.x / this.y
//   }
//   remainder(){
//     return this.x % this.y
//   }
//   }
  
// module.exports = Mathh



// exports.a =function(){
//   var a  = 10;
//   return a;
// }

// var User = function() {                   creating object without using the new keyword
//   var privateMethod = function() {
//     console.log('hello');
//   }

//   return {
//     sayHello : function() {
//       privateMethod();
//       this.done = true;
//     }
//   }
// }

// var user1 = User();
// console.log(user1.sayHello)

// function cube(x) {
//   return x * x * x;
// }

// const foo = Math.PI + Math.SQRT2;

// var graph = {
//   options: {
//       color:'white',
//       thickness:'2px'
//   },
//   draw: function() {
//       console.log('From graph draw function');
//   }
// }

// export { cube, foo, graph };

// const s1 = require('./tempDelFile2.js');
// process.num = 2;
// console.log("file1", process.num);
// s1.changeNum();
// console.log("file1", process.num);

// var a = 10;
// function modA(p){
//   a = p;
//   console.log(a);
// }






// var a = 10;
// exports.a = a;
// exports.setA = function(a){
//   this.data = a;
//   return this.data
// }
// exports.getA = function(){
//   return a; 
// }  
// function getA(){
//   return a;
// }




// console.log(getA(),'3')

//  function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
 
// Point.prototype.distance = function() {
//     return Math.sqrt(this.x*this.x+this.y*this.y);
// };
 
// module.exports = Point;
 
// var HelloWorld = (function () {
//   this.greeting = 'Hello, World';
//   return this;
// })();
// module.exports = HelloWorld;


// exports.myObj = {
//       a: 30,                                   //working
//      setA : function(a){
//      this.data = a;
//    return this.data
// },
//      getA : function(){
//      return this.a; 
// }  
// }



// exports.myObj = {                        //wokring
//     data: 10,
//     set: function (value) {
//         this.data = value;
//     },
//     get: function () {
//         return this.data;
//     }
// }


// class Employee  
//   {  
// //Initializing an object  
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
// //Declaring method  
//     detail()  
//     {  
//  console.log(this.id + " " + this.name)
//     }  
//   }  
// //passing object to a variable   
// var e1=new Employee(101,"Martin Roy");  
// var e2=new Employee(102,"Duke William");  
// e1.detail(); //calling method  
// e2.detail();  

// (function(){
//   console.log('hello');

// })()

// var a = 10;
//     function a1(){
//       console.log(a)
//     }
//     function a2()
//     {
//       console.log(a)
//     }

//     a1()
//     a2()

// function  fun(){
//   var a = 10;          // Private variable  
// } 

// console.log(a)


// function Kid (name) {
// // Private
// // var idol = "Paris Hilton";
// var idol = {abdul:'majeed'}
// // Privileged
// this.getIdol = function () {
// delete idol.abdul
// console.log(idol)
// };
// }


// var r = new Kid('abdul')
// r.getIdol()
// // console.log(r.getIdol())






// var myObject = {
//     name : "Edmore",
//     age  : 28,
//     next_year : function(){ // method
//         return this.age += 1;
//     }
// };

// // var tempobj = 

// function Container(param) {
//     this.member = param; //public member
//     //private
//     var secret = 3;
//     var  that = this; //makes outer object available to private methods
    
//     //private method..
//     var test_private = function(){
//         console.log("Private function");
//     };

//     //privileged method - can be seen from outside..and can access private methods..
//     this.test_privileged = function(){
//         console.log("Accessing privileged method");
//         test_private();
//     };

// }

// //public method
// Container.prototype.stamp = function (string) {
//     return this.member + string;
//     }

// var s = new Container('Hello ')
// console.log( s.stamp('Abdul'))
// console.log(s.test_private)
// console.log(s.test_privileged())





// function Name (name) {
// // Private
// var idol = "Elon Musk";
// // Privileged
// this.getIdol = function () {
// console.log(idol);
// };
// }

// var k = new Name('Abdul')
// console.log(k.idol)
// k.getIdol()

// // Constructor
// function Kid (name) {
// // Private
// var idol = "Elon Musk";
// // Privileged
// this.getIdol = function () {
// return idol;
// };
// // Public
// this.name = name;
// }
// // Public
// Kid.prototype.getName = function () {
// return this.name;
// };
// // Static property
// Kid.town = "South Park";

// var cartman = new Kid("Abdul");
// // Access private property
// console.log(cartman.idol); // undefined

// // Access privileged method
// console.log(cartman.getIdol()); // "Elon Musk"

// // Access public property
// console.log(cartman.name); // "Cartman"

// // Access public method
// console.log(cartman.getName()); // "Cartman"

// // Access static property on an instance
// console.log(cartman.town); // undefined

// // Access static property on the constructor object
// console.log(Kid.town); // "South Park"

// // O/p:  undefined
// //       Elon Musk
// //       Abdul
// //       Abdul
// //       undefined
// //       South Park




// var myBankAccount = (function(){
//   var balance = 0;

//   return{
//     getBalance: function(){
//                   return balance
//                 }
//   }
// })()


// var a = {name:'abdul'}
// console.log(a);

// module.exports ={
//    a : 10,
//    temp : function(x){
//     a = x;
//     return a;
//   }
// }

// var a = {name : 'majeed'};
// var temp = function(x){
//   a.name = x;
//   return a.name;
// }
// console.log(a);
// module.exports.a = a;
// module.exports.temp = temp;




// exports.myObj = {
//       a: 30,                                
//      setA : function(a){
//      this.data = a;
//    return this.data
// },
//      getA : function(){
//      console.log(this.data,'5');    //to check if the data is coming here
//      return this.a; 
// }  
// }



// var counter = require('./tempDelFile2.js');
// console.log(counter.Counter.count,'2')
// counter.Counter.add();                                      //check
// // counter.Counter.remove();
// console.log(counter.Counter.count,'3');

// var x = counter.Counter.count
// exports.temp = function(){
//   console.log('temp 4')
//      return x;  
// }

// O/p: 1
//      10




// var i = require('./tempDelFile2.js')
// console.log(i.a())

// var a = 10                         public throughout the function and exported 
// var b = 20                         public in this function but not exporting hence its private to 
//                                    the other files
// var obj = {first :'abdul'}

// var first =  function(){

//   console.log('hello');
// }

// var second = function(){
//   console.log('second');
// }

// module.exports ={
//   a,first,second,obj
// };


// function Kid (name) {
// // Private
// var idol = "Elon Musk";
// // Privileged
// this.getIdol = function () {
// return idol;
// };
// // Public
// this.name = name;
// }
// // Public
// Kid.prototype.getName = function () {
// return this.name;
// };
// // Static property
// Kid.town = "South Park";

// var cartman = new Kid("Abdul");
// // Access private property
// console.log(cartman.idol); // undefined

// // Access privileged method
// console.log(cartman.getIdol()); // "Elon Musk"

// // Access public property
// console.log(cartman.name); // "Cartman"

// // Access public method
// console.log(cartman.getName()); // "Cartman"

// // Access static property on an instance
// console.log(cartman.town); // undefined

// cartman.town = 'p'
// console.log(cartman.town)
// // Access static property on the constructor object
// console.log(Kid.town); // "South Park"

// // O/p:  undefined
// //       Elon Musk
// //       Abdul
// //       Abdul
// //       undefined
// //       South Park




// trying to create objects of variables 

// var b = {name:'abdul',age:'22'}               // can we create object for a variable object
//  b = new b();   
//  b.name =  'majeed';
//  console.log(b.name)  






//var k = 'helllo';
// function temp (){
//   this.s = 'helllo'
// }
// var s = new temp()
// console.log(s.s)


// chaning the value for the private object 

// var Temp = function(){
//   var a  = {first: ' abdul', last: 'majeed'}        //  private variable
//    this.a = function(){
//     return a;                          //       accessing privileged method

//    }
// }

//  var t = new Temp();                     //      creating an object 
// console.log(t.a().first)                 //      accessing privite variable using privileged
// t.a().first = 'aa'
// console.log(t.a())              //      changing value of the object 


// can we create objects of a variable and use it

// var x = "John";        // x is a string
// var y = new String("John");  // y is an object
// console.log(y.x)

// var b = {name: 'abdul',last:'majeed'};
// var t = new Object()
// console.log(t.name)

// var human = {name : 'abdul'}
// var human = new Object()
// console.log(human.name)


// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();





// var b = {name: 'abdul',last: 'majeed'}        //     Working  one file
// var c = Object.create(b)
// c.name = 'aaaa'
// c.last = 'majeeed'
// console.log(c)
// console.log(b)




// var b = {name: 'abdul',last: 'majeed'}
// var c = Object.create(b) 
// console.log(c)
// c.name = 'sherlock'
// c.last = 'holmes'
// console.log(b)
// console.log(c)


var a = 10;
var b = 20;
var name = {first: 'abdul',last : 'majeed'}
var addr = {city: 'hyd', country: 'india'}
var Temp = function(n){
  this.n = n;
}
Temp.prototype.p = function(g){
  return g;
}

var k = new Temp(5)
console.log(k.n)
console.log(k.a(6))

var Temp2 = function (c){
  return c;
}
module.exports = {
 a,name,Temp
}










// class Person {
//   constructor() {
//     this._name = 'bob';
//   }

//   set name(name) {
//     this._name = name
//   }

//   get name() {
//     return this._name;
//   }  
// }
// module.exports = {Person}





// Making use a constructor and using it in a function

// function Temp(e){
//    this.e = e
// }
// Temp.prototype.a = function(e){
//   return e;

// } 
// var k = new Temp(5)
// console.log(k.e)
// console.log(k.a(10))

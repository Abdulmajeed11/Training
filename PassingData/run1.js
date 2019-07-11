 // example 1:
module.exports.changeNum = function() {
    process.num = 3;
    console.log("file2", process.num);
};

// example 2 :
var myModule = require('./eg1');
var name = myModule.name;
console.log(name);

// O/p: foobar

// example 3: 
var name = require('./eg1.js');
console.log(name.name); 

// O/p: foobar

// example 4:
const { PI } = Math;
exports.area = function(r){return PI * r ** 2};


// Example 5:
 class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
module.exports = Square

// Example 6:
let cats = require('./eg1');  
let Cat = cats.Cat;

// creates some cats
let cat1 = new Cat("Manny");  
let cat2 = new Cat("Lizzie");

// Let's find out the names and ages of cats in the class
console.log("There are two cats in the class, " + cat1.name + " and " + cat2.name + ".");  
console.log("Manny is " + cat1.age + " years old " +  " and Lizzie is " + cat2.age + " years old.");  

// o/p: There are two cats in the class, Manny and Lizzie
//      Manny is 1 years old  and Lizzie is 1 years old


// Example 7:
const helpers = require('./eg1.js')
var c =  helpers.multiplyByTwo(10) 
console.log(c);

// or, you can import just the named property you need
const divideByTwo = require('./eg1.js').divideByTwo
var d = divideByTwo(18) 
console.log(d)

// o/p: 20
     // 9

// Example 8a: 
var myRandom = require('./eg1.js');
console.log(myRandom.between1and10())

// O/p: 1.5341589666961137

// Example 8b:
var myRandom = require('./eg1.js');
console.log(myRandom.getRandom(5, 99));

// o/p: TypeError: myRandom.getRandom is not a function.

// By hiding implementation details in a module and only exposing those parts which are to be used
//  by other parts of your codebase, you can keep your codebase well organized.


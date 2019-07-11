// Below are the various examples for passing data between or using them in two files
// note: these examples involve their process by using run1.js examples , numbering is done accordingly

// example 1:

const s1 = require('./run1.js');
process.num = 2;
console.log("file1", process.num);
s1.changeNum();
console.log("file1", process.num);
 
// O/p: file1 2
//      file2 3
//      file1 3


// Example 2: 
var name = "foobar";
exports.name = name;


// Example 3:

 let name='foobar';
   let city='xyz';
   let company='companyName';

   module.exports={
    name,
    city,
    company
  }


 // Example 4: 
const circle = require('./run1.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

// O/p: The area of a circle of radius 4 is 50.26548245743669

// Example 5: 
const Square = require('./run1.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

// O/p: The area of mySquare is 4

// Example 6:
function Cat(name) {  
    this.age = 1;
    this.name = name;
}

// now we export the class, so other modules can create Cat objects
module.exports = {  
    Cat: Cat
}

// Example 7:
module.exports = {
  multiplyByTwo: function(x) { return x *2 },
  divideByTwo: function(x) { return x / 2}
} 


// Example 8:
function getRandom(min, max) {
      return Math.random() * (max - min) + min;
}

exports.between1and10 = function() {
      return getRandom(1, 10);
};



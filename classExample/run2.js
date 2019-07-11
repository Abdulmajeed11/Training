
"use strict";                                      
var Mathh = require('./classEg2.js');

var calc = new Mathh(3,4);

console.log("addition of operands is: " + calc.add());
console.log("subtraction of operands is: " + calc.subtract());
console.log("multiplication of operands is: " + calc.multiply());
console.log("quotient on dividing operands is: " + calc.divide());
console.log("remainder on dividing operands is: " + calc.remainder()); 
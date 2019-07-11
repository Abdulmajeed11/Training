//Below example is for example 9 in thisEg.js

var a = require('./thisEg.js').myObj   
console.log(a.a,'1')
 // a.a = 20
// console.log(a)
 console.log(a.setA(20),'2')
 console.log(a.data,'3');
 // console.log(a.a,'3')
 console.log(a.getA(),'4')

// O/p: 30 '1'
//      20 '2'
//      20 '3'
//      20 '5'
//      30 '4'

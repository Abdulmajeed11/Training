var h = require('./example1.js')
console.log(h.a)
console.log(h.b)
console.log(h.name)
console.log(h.addr)
console.log(h.temp(4))
//console.log(h.temp2(5))   // will give error as the function is not exported


// O/p:  10
//       undefined
//       { first: 'abdul', last: 'majeed' }
//       undefined
//       4


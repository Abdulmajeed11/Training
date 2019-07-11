var h = require('./example2.js')
 console.log(h.a)

var y = new Object(h.name)
console.log(y.first + ' ' + y.last)

var z = new h.Temp(6)  
console.log(z.p(5))


// O/p: 10
//      abdul majeed
//       5
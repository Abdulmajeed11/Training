var a = 10;
var b = 20;
var name = {first: 'abdul',last : 'majeed'}
var addr = {city: 'hyd', country: 'india'}


var t = new Object(name)
t.first = 'sherlock'
t.last = 'holmes'

console.log(t)

var Temp = function(n){
  this.n = n;
}
Temp.prototype.p = function(g){
  return g;
}

var k = new Temp(5)
console.log(k.n)
console.log(k.p(6))

var Temp2 = function (c){
  return c;
}



// O/p: { first: 'sherlock', last: 'holmes' }
//      5
//      6

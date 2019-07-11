//Example to create objects in another file i.e run2.js

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

var Temp2 = function (c){
  return c;
}
module.exports = {
 a,name,Temp
}


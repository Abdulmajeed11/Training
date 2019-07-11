// Below is an example of combination of export and non export variable trying to be accessed 
//in  other file


var a = 10;
var b = 20;
var name = {first: 'abdul',last : 'majeed'}
var addr = {city: 'hyd', country: 'india'}
var temp = function(n){
  return n;
}
var temp2 = function (c){
  return c;
}
module.exports = {
 a,name,temp
}
// Chaning the value of object in other file
var a = {name : 'majeed'};
var temp = function(x){
  a.name = x;
  return a.name;
}
console.log(a,'old value');
module.exports.a = a;
module.exports.temp = temp;


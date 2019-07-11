
var a = 10;
exports.modifyA =function(p){
  a = p
  return a;
}
exports.getA =function(){
  return a;
}
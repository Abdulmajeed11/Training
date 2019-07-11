exports.a = function(){
console.log("hello")
}

exports.add = function(a,b){
var c = a + b;
console.log(c)
return c;
}

exports.mul = function(a,b){
	var c = a * b;
	console.log(c)
	return c;

}

exports.name  = function(name){
	this.name  = name ;
	console.log(name)
	return this;	
}
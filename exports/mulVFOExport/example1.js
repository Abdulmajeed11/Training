// multiple variable 
var a = 1000;
exports.a =a;

var text = 'hello'
exports.text =  text;  

//multiple function
exports.ab = function() {
console.log('hello world');
};

exports.abc = function(a) {
   return a
};

//multiple objects 

exports.obj = {
	city : "hyderabad",
	country : 'india'
}

exports.Facebook = {
	Founder : 'Mark zuckerberg', Details: { Type: 'Social media ', AppBase : 'Android & Ios' }
}
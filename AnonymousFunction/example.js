// Example - 1 
var x = function (a, b) {return a * b};
var z = x(4, 3);
console.log(z)

//o/p: 12

// Example - 2 
var Temp = function()
{
 console.log("Hello world")
}
Temp()

// o/p: Hello world

// Example - 3
var Temp = function(name)
{
 return name;
}
console.log(Temp('abdul'))

// O/p : abdul

// Example - 4
var a = function () {}; console.log(a)

 // O/p : function a()

 // Example - 5
 setTimeout(function() {
  console.log('hello');
}, 3000); 

// O/p: hello (after 3 seconds) 
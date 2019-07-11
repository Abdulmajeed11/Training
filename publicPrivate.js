//Below are the examples demonstrating the use of public and private variable,functions


// Example 1:

var cat = "lion";     // public variable 
function greetVisitor () {     // public function
console.log("Hello world!");
console.log(cat);
}

greetVisitor()

// O/p: Hello world
//      lion

// Example 2:

a = 10;
function temp(x){
	a = x;
    console.log(a);
}

temp(30);
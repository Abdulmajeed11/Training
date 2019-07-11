//Below are the examples demonstrating the use of public and private variable,functions


// Example 1a:   public variable and function

var cat = "lion";     // public variable 
function greetVisitor () {     // public function
console.log("Hello world!");
console.log(cat);
}

greetVisitor()

// O/p: Hello world
//      lion

// Example 1b:  Changing  the variable value in the same file

a = 10;
function temp(x){
	a = x;
    console.log(a);
}

temp(30);

// O/p: 30;

// Example 2:  getting public variable through a method

var Test = {
 name: 'hello',
 // public Method
 getName: function() {
 return this.name;
 }
}
console.log(Test.getName());

// O/p: hello



// Important points:

->Public: Value of public variable/method, can be used throughout the program.
eg: var a = 10;
    function a1(){
    	console.log(a)
    }
    function a2()
    {
    	console.log(a)
    }
    a1()
    a2()
 
 // O/p: 10, 10

->Private : Value in within the function scope, cant be accessed outside its scope
eg: function  fun(){
	var a = 10;          // Private variable  
} 

console.log(a);

// O/p: a not defined 

->Privileged : These are the variables that have the access to private properties,
  but at the same time publicly exposing itself
 We can delete or replace a privileged method, but you cannot alter its contents. 
 I.e. this privileged method returns the value of a private property:
Eg: function Name (name) {
// Private
var idol = "Elon Musk";
// Privileged
this.getIdol = function () {
console.log(idol);
}; 
}

var k = new Name('Abdul')
console.log(k.idol)            // trying to access the private variable 
k.getIdol()                    // getting private variable value using privileged method

// O/p: undefined      
//      Elon Musk'

-> Static: static member is shared by all instances of the class as well as the class itself 
(i.e. the Kid object), but it is only stored in one place. This means that its value is not 
inherited down to the object’s instances:
Eg: function Kid (name) {
// Constructor code
}
// Static property
Kid.town = "South Park";


// Example 3a: This example will demonstrate the use of public, private, static and Privileged 
//            variables or methods

// Constructor
function Kid (name) {
// Private
var idol = "Elon Musk";
// Privileged
this.getIdol = function () {
return idol;
};
// Public
this.name = name;
}
// Public
Kid.prototype.getName = function () {
return this.name;
};
// Static property
Kid.town = "South Park";

var cartman = new Kid("Abdul");
// Access private property
console.log(cartman.idol); // undefined

// Access privileged method
console.log(cartman.getIdol()); // "Elon Musk"

// Access public property
console.log(cartman.name); // "Cartman"

// Access public method
console.log(cartman.getName()); // "Cartman"

// Access static property on an instance
console.log(cartman.town); // undefined

cartman.town = 'p'
console.log(cartman.town)   // p


// Access static property on the constructor object
console.log(Kid.town); // "South Park"

// O/p:  undefined
//       Elon Musk
//       Abdul
//       Abdul
//       undefined
//       South Park

// Example 3b:

var myObject = {
    name : "Edmore",
    age  : 28,
    next_year : function(){ // method
        return this.age += 1;
    }
};

// var tempobj = 

function Container(param) {
    this.member = param; //public member
    //private
    var secret = 3;
    var  that = this; //makes outer object available to private methods
    
    //private method..
    var test_private = function(){
        console.log("Private function");
    };

    //privileged method - can be seen from outside..and can access private methods..
    this.test_privileged = function(){
        console.log("Accessing privileged method");
        test_private();
    };    

}

//public method
Container.prototype.stamp = function (string) {
    return this.member + string;
    }

var s = new Container('Hello ')
console.log( s.stamp('Abdul'))
console.log(s.test_private)
console.log(s.test_privileged)

// O/p: Hello Abdul
//   	undefined
// 	    Accessing privileged method
//   	Private function
//    	undefined


// Important points:
// The JavaScript this keyword refers to the object it belongs to.
// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.
// this keyword written in any scope doesn’t mean that it refers to that function/block scope only

// Examples:

// example 1:

var myFunction = function () {
  console.log(this);
};

myFunction();

// O/p: prints global object 
// Calling this here refers to the global object 

//Example 2:
// Inside Object literals, the this value will always refer to its own Object.
var myObject = {};

myObject.someMethod = function () {
  console.log(this);
};

// call our method
myObject.someMethod();

// O/p: { someMethod: [Function] }
// Here, this will refer to the Object that called it, i.e, myObject

// Example 3: with constructors 

var myConstructor = function () {
    this.someMethod = function () {
        console.log(this);
    };
};

var a = new myConstructor();
a.someMethod();

// O/p: myConstructor { someMethod: [Function] }

// Example 4: with prototypes

var myConstructor = function () {
    this.someMethod = function () {
        console.log(this);
    };
};

myConstructor.prototype = {
    somePrototypeMethod: function () {
        console.log(this);
    }
};

var a = new myConstructor();
a.someMethod();
a.somePrototypeMethod();

// O/p:  { someMethod: [Function] }
//       { someMethod: [Function] }

// Example 5: 

var obj = {};

obj.myMethod = function () {
  console.log(this); // this = `obj`
};

obj.myMethod();

O/p: { myMethod: [Function] }

// Example 6: 
function foo(){
	console.log(this.a);
}
 var a = 10;
 foo()

 // O/p: undefined

 // Example 7:

 function foo()
 {
 	var a = 2;              //local scope
 	return bar(); 
 }
 function bar(){
  	console.log(this.a);          // searches for the varibale if defined as global scope
 }

 foo();

 // O/p: undefined      // as 'a' is in local scope but function call is searching it globally and cant find it

 // Example 8:
 var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
  fun: function(a){
    console.log(this.prop);
    return a;
  }
  };

console.log(test.fun(5));


// O/p: 42, 5     // it refers to the object

//Example 9:

exports.myObj = {
      a: 30,                                   //working
     setA : function(a){
     this.data = a;
   return this.data
},
     getA : function(){
     	console.log(this.data,'5')
     return this.a; 
}  
}


// Example 10a:   Object method binding
var person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    console.log(this)
    return this;
  }
};
person.myFunction()

// O/p: { firstName: 'John',
//      lastName: 'Doe',
//      id: 5566,
//      myFunction: [Function: myFunction] }


// In this example, this represents the person object that "owns" the fullName method

// Example 10b:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());

// o/p: John Doe

// In this example, this represents the person object.
// Because the person object "owns" the fullName method.

// Example 11: Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
console.log(person1.fullName.call(person2)); 

// O/p: John doe
// In the example below, when calling person1.fullName with person2 as argument,
//  this will refer to person2, even if it is a method of person1
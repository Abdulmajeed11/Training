// Important points:
// ->Classes are in fact "special functions", and just as you can define function expressions
//  and function declarations,the class syntax has two components: class expressions and class declarations.
// -> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top 
//   of their scope before code execution.
//   Eg: console.log(hoist); // Output: undefined
//   var hoist = 'The variable has been hoisted.';
//   the result of the log should be: ReferenceError: hoist is not defined, but instead, its output is undefined. 

// ->You first need to declare your class and then access it, otherwise code like the following will
//  throw a ReferenceError
//   const p = new Rectangle(); // ReferenceError
//    class Rectangle {}

//   Defining methods :
//  -> The common practice with constructor functions is to assign methods directly to the prototype 
//     instead of in the initialization

//   Defining an class :
// ->A constructor function is initialized with a number of parameters, which would be assigned as properties of this,
//  referring to the function itself. The first letter of the identifier would be capitalized by convention.
// Eg: function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }
// When we translate this to the class syntax -
// Eg:
// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }
// }

// ->The body of a class is the part that is in curly brackets {}. 
// This is where you define class members, such as methods or constructor.

// Example 1: class declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
var r = new Rectangle(4,4)
console.log(r)

//Example 2: class expression
//unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);

// output: "Rectangle"

// named
var Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);

// output: "Rectangle2"

//Example 3a: creating objects using constructor
function Person(name) {
  this.name = name;
  this.hi = function() {
    console.log('Hi! My name is ' + this.name);
  };
}

var eminem = new Person('Stich');
eminem.hi();


//O/p: Hi! My name is Stich

// Note: Although methods can be defined this way, this approach does have a downside. Every time an 
// instance of Person is created, a new function is defined and assigned to the hi property of 
// that object. If we create 5 Person objects, they will all have their own hi methods that do 
// the same thing. A more efficient way to do this is to define hi once, and have each Person object
//  use that same function reference. To do this, we can use a function’s prototype.

//Example 3b:
function Person(name) {
  this.name = name;
}

Person.prototype.hi = function() {
  console.log('Hi! My name is ' + this.name);
};

let david = new Person('David');
david.hi();
let patrick = new Person('Patrick');
patrick.hi(); 

// O/p: Hi! My name is David
//      Hi! My name is Patrick

//Example 3c :
function Person(first,last) {
    this.firstName = first;
    this.lastName = last;
}

var person1 = new Person('Steve','Jobs');            
console.log(person1.firstName + " " + person1.lastName);
var person2 = new Person('Bill','Gates');            
console.log(person2.firstName + " " + person2.lastName );

// O/p: Steve Jobs
//      Bill Gates

//Example 3d:
function Person(first,last) {
    this.firstName = first;
    this.lastName = last;
    this.getFullName = function(){
     return this.firstName + " " + this.lastName;
   }
}

var person1 = new Person('Steve','Jobs');            
console.log(person1.getFullName());
var person2 = new Person('Bill','Gates');
console.log(person2.getFullName());    

// O/p: Steve Jobs
//      Bill Gates

// Example 3e:
function Person(FirstName, LastName, Age) {
        this.firstName = FirstName 
        this.lastName = LastName 
        this.age = Age 
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
};

var person1 = new Person("James","Bond",50);
console.log(person1.getFullName());

var person2 = new Person("Tom","Paul");
console.log(person2.getFullName());

// O/p: James Bond
//      Tom Paul 

// Example 4:  CLass example with getter method
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area); 

// O/p: 100

// Example 5: Class example with extends
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks

// O/p: Mitzie barks.

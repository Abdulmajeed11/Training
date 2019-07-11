// Important points:
// -> Almost everything in JS are objects which includes Boolean,Numbers,Strings,Data,Math,Regular Expression,
//    Array function and Obejcts. Also All JavaScript values, except primitives, are objects.
// -> A primitive value is a value that has no properties or methods.
//    JavaScript Primitives : string,number,boolean,null,undefined. Eg : x = 3.14
// -> JavaScript variables can contain single values: Eg: var person = "John";
// -> Objects are variables too. But objects can contain many values.
//    Eg: var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// -> A JavaScript object is a collection of named values.
// -> The named values, in JavaScript objects, are called properties.
// -> Methods are actions that can be performed on objects.Object properties can be both primitive
//    values,other objects,and functions.An object method is an object property containing a function definition. 
// -> JavaScript objects are containers for named values, called properties and methods.
// -> An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
//    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// -> Ways for creating object: 
//   1. Using literal
//    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//   2.Using new keyword:
//     var person = new Object();
//     person.firstName = "John";
//     person.lastName = "Doe";
//     person.age = 50;
//     person.eyeColor = "blue";
//   Note: Both the lines are exactly the same
// -> Objects are mutable: They are addressed by reference, not by value.
//   Eg: var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
//       var x = person;
//       x.age = 10;             // This will change both x.age and person.age
// ->JavaScript variables are not mutable. Only JavaScript objects.
// -> Javascript Properties are the values associated with a JavaScript object.To access property syntax
//    objectName.property         // person.age
//    objectName["property"]      // person["age"]
//    objectName[expression]      // x = "age"; person[x]
// -> Adding Properties: We can add new properties to an existing object by simply giving it a value.
//    Assuming that the person object already exists - you can then give it new properties:
//    person.nationality = "English";
// -> Deleting Properties: The delete keyword deletes a property from an object:
//    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//    delete person.age;   // or delete person["age"]; 
//     If we try to access age we get undefined 
// ->Note about delete: The delete keyword deletes both the value of the property and the property itself.
//   After deletion, the property cannot be used before it is added back again.
//   The delete operator is designed to be used on object properties. It has no effect on variables or functions.
//   The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
// -> JavaScript objects inherit the properties of their prototype.
//   The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.
// ->JavaScript Methods: JavaScript methods are actions that can be performed on objects.
//   A JavaScript method is a property containing a function definition. To acess it syntax
//   objectName.methodName()
//   Eg: name = person.fullName();
//   If we access the fullName property, without (), it will return the function definition:
//   name = person.fullName;
// -> Built in methods in JS one example is Uppercase
//    var message = "Hello world!";
//    var x = message.toUpperCase();
// ->Adding a Method to an Object
// Eg:  person.name = function () {
//      return this.firstName + " " + this.lastName;
//  };
// -> A varructor is a blue print that to create different objects of a function 
//   Let us consider that Person is a function which takes some parameters then creating the varructor will be like
//   Eg. var myFather = new Person("John", "Doe", 50, "blue"); 
//       var myMother = new Person("Sally", "Rally", 48, "green");
// -> Javascript BuiltIn varructors:
//   var x1 = new Object();    // A new Object object
//   var x2 = new String();    // A new String object
//   var x3 = new Number();    // A new Number object
//   var x4 = new Boolean();   // A new Boolean object
//   var x5 = new Array();     // A new Array object
//   var x6 = new RegExp();    // A new RegExp object
//   var x7 = new Function();  // A new Function object
//   var x8 = new Date();      // A new Date object
// ->JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster.
// Eg: var x1 = {};            // new object
//     var x2 = "";            // new primitive string
//     var x3 = 0;             // new primitive number
//     var x4 = false;         // new primitive boolean
//     var x5 = [];            // new array object
//     var x6 = /()/           // new regexp object
//     var x7 = function(){};  // new function object
// ->Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:
// Date objects, Array objects, and Person objects inherit from Object.prototype

// Examples: 
// Example 1:  Basic Object

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)

// O/p: { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

// Example 2: Using new Keyword

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

// O/p: { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
 
 // Example 3: changing object value 

 var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10;
x.eyeColor = 'brown'; 
console.log(person)

// O/p: { firstName: 'John', lastName: 'Doe', age: 10, eyeColor: 'brown' }

// Example 4 : Javascript object property example

var person = {  firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
console.log( person.firstname + " is " + person.age + " years old.");

// O/p: John is 50 years old.

// Example 5 : Adding new property

var person = {  firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
person.nationality = "Irish";
console.log(person.firstname + " is " + person.nationality + ".");
console.log(person)

// O/p : John is Irish.
//   { firstname: 'John',lastname: 'Doe',age: 50, eyecolor: 'blue',nationality: 'Irish' }


// Eample 6a: Deleting a property
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"]; 
delete person["eyeColor"]
console.log(person)

// O/p: { firstName: 'John', lastName: 'Doe' }

// Example 6b: trying to delete the whole object 

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person;
console.log(person)

// O/p: { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
// Reason stated in important points

// Example 6c : Some more example on delete
 var superObject = {
            name: "Super Object"
        };

 myObject = Object.create( superObject );
 console.log( "1 - Name:", myObject.name );
 myObject.name = "My Object";
 console.log( "2 - Name:", myObject.name );
 delete( myObject.name );
 console.log( "3 - Name:", myObject.name );
// The previous delete removed the "name" property from the lowest object in the prototype chain
// the one referenced by the myObject variable)
 delete( myObject.name );
 console.log( "4 - Name:", myObject.name );
 delete( superObject.name );
 console.log( "5 - Name:", myObject.name );

//O/p : 1 - Name: Super Object
        // 2 - Name: My Object
        // 3 - Name: Super Object
        // 4 - Name: Super Object
        // 5 - Name: undefined
// Reason : Refer important points

// Example 7a - Javascript Object method example

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
var name = name = person.fullName();
console.log(name);

// O/p = John Doe

// Example 7b : Built in Javascript methods

var message = "Hello world!";
var x = message.toUpperCase(); 
console.log(x)

// O/p: HELLO WORLD!

// Example 7c : Adding a method to an object 
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
};
person.name = function() {
  return this.firstName + " " + this.lastName;
};
console.log("Full Name: " + person.name()); 

// O/p: Full Name: John Doe

// JavaScript Object Accessors:
// JavaScript Accessors (Getters and Setters).ECMAScript 5 (2009) introduced Getter and Setters.
// Getters and setters allow you to define Object Accessors (Computed Properties).

// Example 8:  get example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "english",
  get lang() {
    return this.language;
  }
};

console.log(person.lang)

// O/p: english

// Example 9: set example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

person.lang = "Irish";

console.log(person.language);
console.log(person)

// O/p:  IRISH
//      { firstName: 'John',lastName: 'Doe',language: 'Irish',lang: [Setter] }

// Example 10: a setter and getter example 
var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
};
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

// O/p: 4

// Example 11: varructor example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var person1 = new Person("John", "Doe", 50, "blue");
var person2 = new Person("Sally", "Rally", 48, "green");
console.log(person1)
console.log(person2)

// O/p: Person { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
//      Person {  firstName: 'Sally', lastName: 'Rally',age: 48, eyeColor: 'green' }

// Example 12a: Adding a Property to an Object using varructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var person1 = new Person("John", "Doe", 50, "blue");
var person2= new Person("Sally", "Rally", 48, "green");

// Add nationality to first object
person1.nationality = "English"; 
console.log(person1)

// O/p: Person {firstName: 'John',lastName: 'Doe',age: 50,eyeColor: 'blue',nationality: 'English' }

// Note: The property will be added to person1. Not to person2. (Not to any other person objects).

//Example 12b: 
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var person1 = new Person("John", "Doe", 50, "blue");
var person2 = new Person("Sally", "Rally", 48, "green");

person1.name = function() {
  return this.firstName + " " + this.lastName;
};
 
console.log(person1.name())
console.log(person1)

// O/p: John Doe
// Person {  firstName: 'John',lastName: 'Doe',age: 50,eyeColor: 'blue',name: [Function] }


// Notet : We cannot add a new method to an object varructor the same way you add a new method to an existing object.
// Adding methods to an object varructor must be done inside the varructor function
// Example : 
function Person(firstName,lastName,age,eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  }
}
// Create a Person object
var person2 = new Person("Sally","Rally",48,"green");

// Change last name
person2.changeName("Doe");
console.log(person2.lastName)

// O/p: Doe
// Reason : The changeName() function assigns the value of name to the person's lastName property.

// JavaScript Object Prototypes
// All JavaScript objects inherit properties and methods from a prototype.
// We cannot add a new property to an existing object varructor:

// Example:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.nationality = "British";
var person1 = new Person("John", "Doe", 50, "blue");
var person2 = new Person("Sally", "Rally", 48, "green");

console.log("The nationality of person1 is " + person1.nationality); 

// O/p:The nationality of my father is undefined

//To add a new property to a varructor, you must add it to the varructor function

// Example:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Britsh";
}

var person1 = new Person("John", "Doe", 50, "blue");
var person2 = new Person("Sally", "Rally", 48, "green");
console.log('person1 nationality is:', person1.nationality)
console.log('person2 nationality is:', person2.nationality)

// O/p: person1 nationality is: Britsh
//      person2 nationality is: Britsh


//We can solve the above inheritance problem by using the prototype method
// Example: 
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "British";
var person1 = new Person("John", "Doe", 50, "blue");

console.log("The nationality of person1 is " + person1.nationality); 

// O/p: The nationality of person1 is British

// The JavaScript prototype property also allows you to add new methods to objects varructors:
Example:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

var person1 = new Person("John", "Doe", 50, "blue");
console.log("Person name - " + person1.name()); 

// O/p: Person name - John Doe

// ECMA5 porperties: 

// Changing a Property Value
// Object.defineProperty(object, property, {value : value})

// Example 1:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN" 
};

Object.defineProperty(person, "language", {value:"NO"})
console.log(person.language)

// O/p: NO

// Example 2: Object.freeze()
var obj = {
  prop: 42
};

Object.freeze(obj);
obj.prop = 33;
console.log(obj.prop);

 // O/p: 42

// Example 3: Object.entries()
var object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// O/p - a: somestring
//      b: 42

//Example 4 : Object.getOwnPropertyDescriptors
var object1 = {
  property1: 42
};

var descriptors1 = Object.getOwnPropertyDescriptors(object1);
console.log(descriptors1.property1.writable);
console.log(descriptors1.property1.value);

// O/p: true , 42

// Example 5: Object.getOwnPropertyNames()
var object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));

// O/p: [ 'a', 'b', 'c' ]

// Example 6 : Object.getPrototypeOf

var prototype1 = {};
var object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1);

// O/p: true

//Example 7 : Object.isExtensible()
var object1 = {};
console.log(Object.isExtensible(object1));
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1));

// O/p: false

// Example 7 : Object.isFrozen()
var object1 = {
  property1: 42
};

console.log(Object.isFrozen(object1));
Object.freeze(object1);
console.log(Object.isFrozen(object1));

// O/p: false, true

// Example 8 : Obejct.isSealed()
var object1 = {
  property1: 42
};

console.log(Object.isSealed(object1));
Object.seal(object1);
console.log(Object.isSealed(object1));
 
// O/p:  false, true

// Example 9: Object.keys()
var object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));

// O/p: [ 'a', 'b', 'c' ]

// Example 10:  Object.prototype.hasOwnProperty()
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified 
// property as its own property (as opposed to inheriting it).
var object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
console.log(object1.hasOwnProperty('toString'));
console.log(object1.hasOwnProperty('hasOwnProperty'));

// O/p: true
//      false
//      false

// Example 11: isPrototypeOf()
function object1() {}
function object2() {}

object1.prototype = Object.create(object2.prototype);
var object3 = new object1();
console.log(object1.prototype.isPrototypeOf(object3));
console.log(object2.prototype.isPrototypeOf(object3));

// O/p:  true
//       true

// Example 12: Object.values
var object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));

// O/p: [ 'somestring', 42, false ]


// Changing Meta data:
// ES5 allows the following property meta data to be changed:
// writable : true      // Property value can be changed
// enumerable : true    // Property can be enumerated
// configurable : true  // Property can be reconfigured
// writable : false     // Property value can not be changed
// enumerable : false   // Property can be not enumerated
// configurable : false // Property can be not reconfigured

// Listing properties:
// Example1:

var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN" 
};

Object.defineProperty(person, "language", {enumerable:false});
console.log(Object.getOwnPropertyNames(person));  // Returns an array of properties

// O/P: [ 'firstName', 'lastName', 'language' ]
// reason : prints all the values

// Example 2: 
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
}
Object.defineProperty(person, "language", {enumerable:false});
console.log(Object.keys(person));

// O/p: [ 'firstName', 'lastName' ]
// reason: only returns enumerated values 

//Addding a property
// Example:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person, "year", {value:"2008"});
console.log(person.year)

// O/p : 2008


// Important terms with examples : 


Object Creation:
// Each of the following options will create a new empty object:
var newObject = {};
// or
var newObject = Object.create( Object.prototype );
// or
var newObject = new Object();


Set Property:
var newObject = {a: 1};
// Accessing to a property
newObject.a; // => 1
// Modifying the value of a property
newObject.a = 0;
newObject.a; // => 0;
// Creating a new property
newObject.b = 2;
newObject.b; // => 2
// Deleting a property
delete newObject.b;
newObject.b; // => undefined

you know that all the properties above are writable, configurable & enumerable, I mean :

writable: I can modify their values, I can update a property just assigning a new value to it.
Defaults to false.
enumerable: I can access to all of them using a for..in loop. Also, enumerable property keys
 of an object are returned using Object.keys method. Defaults to false.
configurable: I can modify the behavior of the property, so I can make them non-enumerable, 
non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the 
only ones that can be removed using the delete operator. Defaults to false.


// Set properties
Object.defineProperty( newObject, 'a', {
   value: "some value",
   writable: true,
   enumerable: true,
   configurable: true
});



// Set properties
Object.defineProperty( newObject, 'a', {
   value: "some value",
   writable: true,
   enumerable: true,
   configurable: true
});



Object’s enumerable property:

Enumerable:
Object.defineProperty( newObject, 'a', {
   value: "some value",
   enumerable: true,
});
// Object {a: "some value"}
for (var key in newObject) { console.log(key) }
// a

Object.keys(newObject);
// ["a"]

Non-Enumerable:
Object.defineProperty( newObject, 'a', {
   value: "some value",
   enumerable: false,
});
// Object {a: "some value"}
for (var key in newObject) { console.log(key) }
// undefined
Object.keys(newObject);
// []

Object’s writable property:

writable:
Object.defineProperty( newObject, 'a', {
   value: "some value",
   writable: true,
});
// Object {a: "some value"}
newObj.a = 'some other new value';
// "some other new value"
newObj
// Object {a: "some other new value"}

Non-writable:
Object.defineProperty( newObject, 'a', {
   value: "some value",
   writable: false,
});
// Object {a: "some value"}
newObj.a = 'some other new value';
// "some other new value"
newObject
// Object {a: "some value"}

Object’s configurable property

configurable
Object.defineProperty( newObject, 'a', {
   value: "some value",
   configurable: true,
});
// Object {a: "some value"}
delete newObject.a;
// true
newObject
// Object {}

Non-configurable:
Object.defineProperty( newObject, 'a', {
   value: "some value",
   configurable: false,
});
// Object {a: "some value"}
delete newObject.a;
// false
newObject
// Object {a: "some value"}
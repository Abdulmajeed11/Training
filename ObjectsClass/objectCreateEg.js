//Below are the examples for creating objects wihout new Keyword

// Important points:
// Each of the following options will create a new empty object:
// var newObject = {};
// // or
// var newObject = Object.create( Object.prototype );
// // or
// var newObject = new Object();
// configurable:
// true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
// Defaults to false.
// enumerable:
// true if and only if this property shows up during enumeration of the properties on the corresponding object.
// Defaults to false.
// writable:
// true if and only if the value associated with the property may be changed with an assignment operator.
// Defaults to false.
// get:
// A function which serves as a getter for the property, or undefined if there is no getter. The function's return value will be used as the value of the property.
// Defaults to undefined.
// set:
// A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as its only argument the new value being assigned to the property.
// Defaults to undefined.


Example 1: Using Object.create along witha prototype 
let car = Object.create(Object.prototype,
  {
    name:{
      value: 'Fiesta',
      configurable: true,
      writable: true,
      enumerable: false
    },
    maker:{
      value: 'Ford',
      configurable: false,
      writable: false,
      enumerable: false
    }
  });
console.log(car.name)
console.log(car.maker)


Example 2 :   
prototypeObject = {
  fullName: function(){
    return this.firstName + " " + this.lastName   
  }
}
var person = Object.create(prototypeObject)
var person2 =  Object.create(prototypeObject)
console.log(person) // Object with prototype object as prototypeObject and no properties
person.firstName = "Virat";
person.lastName = "Kohli";
console.log(person.fullName())
person2.firstName = 'Deyle';
person2.lastName = 'Steyn';
console.log(person2.fullName()); 


Example 3 : Without a prototype
var dictionary = Object.create(null, {
    destructor: { value: "A destructive element" }
});

function getDefinition(word) {
    return dictionary[word];
}

console.log(getDefinition("destructor"));
console.log(getDefinition("constructor"));

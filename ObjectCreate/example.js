// Below are the ways to create objects

// Example 1: trying to check if we can create an object for an object variable 

var b = {name:'abdul',age:'22'}               
 b = new b();   
 b.name =  'majeed';
 console.log(b.name)  // gives error as b() is not a constructor its a variable

 // O/p: b is not a constructor

// Example 2: creating object for a function

var k = 'helllo';
function temp (){
  this.k = 'helllooo'
}
var s = new temp()
console.log(k)
console.log(s.k)

/*O/p: helllo
     helllooo*/


// Example 3:Changing the value for the private object 

var Temp = function(){
  var a  = {first: ' abdul', last: 'majeed'}        //  private variable
   this.a = function(){
    return a;                          //       accessing privileged method

   }
}

 var t = new Temp();                     //      creating an object 
console.log(t.a().first)                 //      accessing privite variable using privileged
t.a().first = 'aa'
console.log(t.a())              //      changing value of the object 


// O/p: abdul
//     { first: 'aa', last: 'majeed' }


// Example 4: creating object for a string
var x = "John";        // x is a string
var y = new String("John");  // y is an object
console.log(y)

// O/p:[String: 'John']



//Ways for creating an object 
//i)
var b = {name: 'abdul',last:'majeed'};
var t = new Object()                 // used for creating object 
console.log(t)                    //   gives an empty object
console.log(b)
t.city = 'hyd'
t.country = 'india'            // Assigning values to the empty object
console.log(t)

// O/p:  {}
         // { name: 'abdul', last: 'majeed' }            // actual object
         // { city: 'hyd', country: 'india' }            // new object

// ii)    another method to create object

var b = {name: 'abdul',last: 'majeed'}
var c = Object.create(b) 
console.log(c)
c.name = 'sherlock'
c.last = 'holmes'
b.name = 'rambo'
console.log(b)
console.log(c)

/*O/p: {}
     { name: 'abdul', last: 'majeed' }
     { name: 'sherlock', last: 'holmes' }*/


// Conclusion:
// -> We can create an object for a string,function and object variable
// -> We get an empty object when we create a new object
// -> We can add and access new properties that we create for the newly created object


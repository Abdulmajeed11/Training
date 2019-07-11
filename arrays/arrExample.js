//changing value of array
var cars = ["Suv", "Volvo", "BMW"];
console.log(cars[0])     // O/p : Suv
cars[0] = "Opel";
console.log(cars[0])     // O/p : Opel

//Access first and last element of Array
fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
console.log(first);     // O/p: Banana
fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];
console.log(last)       // O/p : Mango 

//Adding Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");   
console.log(fruits);             //O/p: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Lemon' ]
   
   //(or)
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    
console.log(fruits);            // O/p: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Lemon' ]
 
// Converting to string
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());           //    o/p: Banana,Orange,Apple,Mango

// Join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));             // O/p :Banana * Orange * Apple * Mango

//Popping and Pushing
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop())                 // O/p : Mango

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");                
console.log(fruits)               // O/p : [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//Shifting Elements
//Shifting is equivalent to popping, working on the first element instead of the last.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the string that was "shifted out"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); 
console.log(fruits)                  // O/p: [ 'Orange', 'Apple', 'Mango' ]

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); 
console.log(fruits)            //O/p: [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

// Deleting Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);            // O/p: [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

//Splicing an Array
//The splice() method can be used to add new items to an array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)               //  O/p: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)               //  O/p: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

//Using splice() to Remove Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); 
console.log(fruits);              //   O/p:[ 'Orange', 'Apple', 'Mango' ]

//Merging (Concatenating) Arrays
//The concat() method creates a new array by merging (concatenating) existing arrays
var x = ["a", "b"];
var y = ["c", "d", "e"];
var u = ["f"];
var z = x.concat(y,u); 
console.log(z)                      // O/p : [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//Slicing an Array
//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange")

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(citrus)                   // O/p : ["Orange", "Lemon", "Apple", "Mango"]

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus)                     //O/p:  ["Apple", "Mango"]


//note:The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus)                    // O/p: [ 'Orange', 'Lemon' ]


//note:If the end argument is omitted, the slice() method slices out the rest of the array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus)            //O/p : [ 'Lemon', 'Apple', 'Mango' ]

//Sorting array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 
console.log(fruits);                // O/p:[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//Reversing Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        
fruits.reverse();  
console.log(fruits);                //   O/p : [ 'Orange', 'Mango', 'Banana', 'Apple' ]


// Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

//ascending 
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);                  //   O/p : [ 1, 5, 10, 25, 40, 100 ]

//descending
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)                 // O/p: [ 100, 40, 25, 10, 5, 1 ]
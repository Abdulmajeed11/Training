//A variable declared outside a function, becomes GLOBAL.
//A global variable has global scope: All scripts and functions on a web page can access it. 
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

Note: To run one case comment out the other cases 

//CASE 1:

function myFunction() {
   carName = "Volvo";
} 
 
myFunction();
console.log(carName);

o/p = volvo

reason = the value to the variable is getting assigned globally and will get the value after the function call is done, if we try to print the value before function call it will give an error


//CASE 2: 

function myFunction() {
   carName = "Volvo";
} 

console.log(carName); 
myFunction();

o/p : carName is not defined

Reason: stated above

//CASE 3: with multiple functions

function myFunction() {
   carName = "Volvo1";
} 

myFunction();

mj();
function mj() {
   jk = "Volvo2";
} 
 console.log(carName)

o/p : Volvo1



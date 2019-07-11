Difference between the local and the global variable  
.............................................................
CASE 1:

var globalVar = "This is a global variable";   
function fun() { 
  var localVar = "This is a local variable";   
  console.log(globalVar); 
  console.log(localVar); 
} 
  
fun();

o/p: This is a global variable
     This is a local variable
........................................................................
CASE 2: 

let globalVar = "This is a global variable";   
function fun() {  
  let localVar = "This is a local variable";  
} 
  
fun();  
console.log(globalVar); 
console.log(localVar); 

o/p:This is a global variable
    Error:localVar is not defined

Reason : the scope of the variable localVar is within the function, if we try to access it outside we get an error .
...................................................................

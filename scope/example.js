

//Example -  1:
function a(test){
	console.log(test);
}
a(1);

// o/p = 1    (Reason : argument is getting to the function and then getting printed)

// Eg - 1 Summary :  Passing value to the function argument
// The value from the function call is getting passed to the function declaration, from which we can 
// use the value into the function   

//Example - 2a
function a(test){
console.log(test)
}
a(function(){
	console.log(a)
});

//o/p = [function]      ( Reason:  function can be passed by arguments )

//Eg - 2a Summary : Passing a function as an argumment
//We can pass function as an argument given inside the function call to the function declaration

//Example - 2b
function a(test){
console.log(test)
}
a(function(){
	console.log('t')
});

//o/p = [function]     ( Reason: function can be passed by arguments )

//Eg - 2b Summary : Passing function as an argument
//We can pass function as an argument given inside the function call to the function declaration

//Example - 2c (own)
function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList() {
    console.log('Hello World');
}

addContact(1, refreshContactList);       

// O/p: hello world         ( Reason: function can be passed by arguments )

//Example - 2c Summary
//Here the functions are getting passed as arguments and the respective calling of the function is done

//Example - 3a
function a(test){
	console.log(test);
}
test = 2;
a();

// Actual O/p - Undefined   (Reason: no parameter is getting passed to the function, the test defined globally 
//                           is different from what is getting printed hence its undefined)
// my O/p - error (Reason : the argument test is not passed to the function)

//Example - 3a Summary : difference in global variable declaration and an argument 
// In the above program test variable is assigned globally, but we are not using that value in the function
// the function call is not givinig any parameters to the function hence the global variable 'test' and the 
// parameter 'test' both are different, and if we try to print an empty test value in function we will get undefined 


//Example - 3b
function a(test){
	console.log(test);
}
a();
test =2;

// Actual O/p : Undefined      (Reason: no parameter is getting passed to the function, the test defined globally 
//                           is different from what is getting printed hence its undefined)
// my O/p : 2 , (Reason : the value Test is assigned globally to the function)


//Example - 3b Summary
// Here, the test varaible is assigned globally after the function call, it wont have an impact on the function 
// as both the 'test' are different, one is the variable and one is an argument which is not provided by the function call
// to the function, Hence its undefined.

//Example - 4
function a(test){
	console.log(test);
    t = 'p';
}
t = '1'
console.log(t);
a();
console.log(t);

//Actual O/p = 1           (Reason: first value assigned globally,in the next value no argument is passed to the function    
            // Undefined     hence the test value within the function is undefined, the value of 't' is getting assigned 
            // p              again and hence the value will be changed to 'p'

//My O/p = 1            (Reason: the first value will be 1, second console value will fail as parameter is not given
      //   Error          and program will terminate after the second console)


// Example - 4 summary : Reassignment of the global variable 
// Here, the first value to be printed is 't' = 1, as t is assigned globally, next function call is made to the function without any 
// argument to the function ,Hence the 'test' value printed is undefined  because its a different value. Next, reassignmnet of the  
// variable 't' is done, so the value will be replaced by the value reassigned.

//Example - 5
function a(test){
	console.log(test2);
}
test2 = '1a';
a()

// Actual O/p - 1a   (Reason : test2 is assigned globally)
// My O/p - fail   (Reason : as parameter is not given to the function)

//Example - 5 Summary : Accessing of the global value within a function
// Here the scope of the variable test2 is global Hence that value can be accessed anywhere,when we
// try to access the value within the function, we will get the value of 'test2' as variable is assigned globally 

//Example - 6
function a(test)
{
	test2 = '2';
	console.log(test2)
}
test2 = '1a';
a(1);

//Actual O/p : 2  (Reason: Re - assignment of test2 is happening hence value is 2)
//My O/p : 1a   (Reason : thought test2 outside function is getting assigned first)

//Example - 6 summary: Re - assignment of global variable
// Here, the argement passed to the function is never used inside the function. The variable that is assigned globally 
// is getting reassigned again, Hence the updated value is getting printed.  


//Example - 7
function a(test){
	test = 'p';
}
console.log(a());
 
 // Actual O/p: undefined  
// My o/p : Function  (Reason: thought the function definition is called)

// Eample - 7 Summary : Passing function as an argument
// Here we are passing the function as an argument without values, hence the value of the function 
// will be undefined 

//Example - 8a
function a(test){
    test = "p";
    console.log(test)
}
test = "t";
a(test);

// O/P = p;    (Reason: Reasignmnet of value is taking place and that value is getting printed)
// MY op = p;   (Reason: the value p is getting assined at the last, hence that will be its value)

// Example - 8a Summary - Reassignment of the variable passed as argument 
// In this case the variable test is passed as argumnet and will give the value of test to the function,in the 
//function the value is getting re-assigned, so the value of test will change from 't' to 'p'.  
// If we comment out test = 'p' and run again we will get the value of test as 't';

//Example - 8b
function a(test){
    test = "p";
   
}
a('t');
console.log(test)

//Actual O/p : test is not defined
// My o/p  : p  (Reason: value it is getting passed to test and that test value is getting assigned as p)

//Example - 8b summary : 
// Here, the argument 't' is passed to the test but that value is getting replaced with the test value again to
// the 'p', as the test value changed so does the scope. The value to Test can be printed id written inside
// the function but printing it outside will fail

// Example - 9  
function a(test){
	test = 'p';
}
test ='t';
a();
console.log(test)

//Actual o/p : t    (Reason : No value is given to the function hence the variable test is not considered and assigned as value)
//My o/p : p       (Reason: function is assigning test = 'p' as the updated value )

// Example - 9 Summary :
//At first the test value is 't', as no argument is provided to the function, the value in the function 
//test = 'p' wont have any affect to the function as both the values are different. 
// When we try to print value after function call, test = 't' being a global variable will be printed, but if we try 
//to print the console within the function after test = 'p' we will get the value as 'p' as the value is getting reassigned 

//Example - 10
function a(t){
	console.log(test);
}
test = 't';
a(test);
test = 'p';

//Actual O/p : t;   (Reason: test value getting called is within the function call) 
//My o/p : t;     (Reason: test value getting called is within the function call)

// Example 10 - Summary :
//At first the value is passed as test = 't', the value 't' is getting passed as argument and that value will be printed
// inside the function. The test value assigned again globally wont have an impact on the test value printed within the function
// However, if we try to put a console after test = 'p' and print the test value we will get the output as 't' and 'p'


//Example - 11a
function a(t){
	test = 'p';
}
console.log(test)
a()

// O/p = Error:test is not defined    (Reason :printing the value without even declaring it will give error)
// My O/P = Error           (Reason :As no value is passed to the test )          

//Example 11a Summary : 
No argument is passed to the function call, hence the test in the function is different from what we are trying to
print, Hence we get an error


//Example - 11b
function a(t){
	test = 'p';
}
a()
console.log(test)

//Actual O/p: P         (Reason: global assigment is happpening as value is getting printed after function call
//My O/p : undefined   (Reason: Value is not assined to it )

//Example 11b summary: 
// Here even though the test value is printing after the function call , the value assigned to it is done 
//global variable value becuase the parameter is not used in the function
// If we change the function a(t) to function a(test) then we will get an error


// ...........................................

// few more examples :

// example 1:

var a = 10;
function modifyA()
{
	var a = 20;
}
modifyA()
console.log(a)

// O/p: 10

// example 2:

var a = 10;
function modifyA()
{
	 a = 20;
}
modifyA()
console.log(a)

// O/p: 20

// example 3:

var a = 10;
function modifyA(a)
{
	 a = 20;
}
modifyA(a)
console.log(a)

// O/p: 10

// example 4:

var a = 10;
function modifyA(a)
{
	 a = 20;
}
modifyA()
console.log(a)

// O/p: 10

// example 5:

var a = 10;
function modifyA(ab)
{
	 a = 20;
}
modifyA()
console.log(a)

// O/p: 20

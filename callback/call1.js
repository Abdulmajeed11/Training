// Callback examples 
var start = Date.now();

//Example1 : witout timestamp 
var myCallback = function(data) {
  console.log('My data: '+data);
};

var usingItNow = function(callback) {
 callback('This is the data');
};

usingItNow(myCallback);              //  O/p: My data: This is the data

//Example 1:(With timestamp )
var myCallback = function(data) {
  console.log('My data: '+data,Date.now() - start);        // My data: This is the data, 0
};

var usingItNow = function(callback) {
 console.log(callback('This is the data'),Date.now() - start,"jjjj");      // undefined, 2 ,'jjjj'
};
console.log(usingItNow(myCallback),Date.now() - start, 'kkk');    //  undefined 3,'kkk'


//Example 2 : With err as parameter and without timestamps

var myCallback = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('Data : '+data); // Otherwise proceed as usual.
};

var usingItNow = function(callback) {
  callback(null, 'New Data');
};
usingItNow(myCallback)              // O/p : Data: New data


//Example 2 : With timestamps
var myCallback = function(err, data) {
  if (err) throw console.log(err,Date.now() - start); //Executes when err parameter value is true
  console.log('Data : '+data, Date.now() - start,'eee'); // O/p: Data : New Data,0,eee
};

var usingItNow = function(callback) {
 console.log(callback(null, 'New Data'),Date.now()-start,'fff');     // O/P: undefined,2,'fff'
};
console.log(usingItNow(myCallback),Date.now() - start,'ggg')     // O/p : undefined,3,'ggg'

//Example 3:
function greeting(name) {
  console.log('Hello ' + name);
}

function processInput(callback) {
  callback('abdul');
}

processInput(greeting);

//  Example 4 : with timeout
var callback = function () {
  console.log("3 seconds later...");
};
setTimeout(callback, 3000);               // O/p : 3 seconds later...

// Example 5
function myNew(next){
    console.log("Im the one who initates callback");
    next("nope", "success");
}

myNew(function(err, res){
    console.log("I got back from callback",err, res);
});

// O/p: Im the one who initates callback
//      I got back from callback nope success

// Example 6 - Asynchronous example
console.log("One");

setTimeout(function() {
  console.log("Two")
},3000);

console.log("Three");


//Output: One,Three, two

// Example 7 - 
function functionOne(x) { console.log(x); }

function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(5, functionOne);

// O/p :  5

// Example 8 - passing a function into callback 

function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(1, function (x) { console.log(x); })

//O/p: 1

// Example 9 - caling function multiple number of times

function functionTwo(var1, callback) {
    callback(var1);	
    callback(var1);	
}

functionTwo(7, function (x) { console.log(x); }) 

// O/p: 7,7


// ** Important point noted **
// If we have a function call with the same name called twice where one function is having callback 
// called once and the other function have callback called twice, the function will execute callback 
// twice for both the function call 
// Considering the above example , If we run Examples 6,7,8 at once the O/p: we get is 5,5,1,1,7,7
// But if we individually run it we get the output respective to the function.
//To resolve this just dont use the function call with the same name, it should be different.


// Example 10 - passing multiple callback functions in the call
function functionTwo(var1, var2, callback1, callback2) {
    callback1(var1);	
    callback2(var2);	
}

functionTwo(1, 2, function (x) { console.log(x); }, function (x) { console.log(x); })

//O/p : 1,2


//Example 11 - Passing function as argument example  
function myFunction(val, callback){
    if(val == 1){
        callback(true);
    }else{
        callback(false);
    }
}

myFunction(0, 
//the true or false are passed from callback() 
//is getting here as bool
// the anonymous function below defines the functionality of the callback
function (bool){
    if(bool){
        console.log("do stuff for when value is true");
    }else {
        //this condition is satisfied as 0 passed
        console.log("do stuff for when value is false");
    }
})


// O/p: do stuff for when value is false

// Example 12 - Callback using timeout
function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);



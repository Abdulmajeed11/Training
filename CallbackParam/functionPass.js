
// Example : 1
function addContact(id, refreshCallback) {
    refreshCallback();
}

function refreshContactList() {
    console.log('old list');
}

function newList() {
    console.log('new List');
}

addContact(1, refreshContactList);
addContact(1, newList);

// O/p : old list
 //       new list

 //Example 2 :
 function foo2(x) {
    console.log(x,"hhh");
}

function foo(x) {
    console.log(x,"jj");
}
function bar(fun) {
    fun("Hello World!");
}
bar(foo);
bar(foo2);

// O/p : Hello World! jj
//       Hello World! hhh

//Example 3:
function functionOne(x) { 
 console.log(x); 
}

function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(2, functionOne);

//  o/p : 2

//Example 4 : // anonymousfunction
function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(1, function (x) {
 console.log(x); 
})

// O/p = 1


//Example 5 : (Multiple callbacks)
function functionTwo(var1, callback) {
    callback(var1);		
    callback(var1);
}

functionTwo(1, function (x) {
 console.log(x); 
})

// O/p : 1
         1


//Example  6 : (Passing multople callback functions to another function)
function functionTwo(var1, var2, callback1, callback2) {
    callback1(var1);	
    callback2(var2);	
}

functionTwo(5, 10, function (y) { console.log(y); }, function (z) { console.log(z); })

// O/p : 5
   //   10


//Example 7
var add = function (a, b) {
    return a+b;
}
var subtract = function (a, b) {
    return a-b;
}

var handle_data = function (func) {
    // get data from user or other external source
    var x = 2;
    var y = 3;
    return func(x, y);
}

console.log(handle_data(add));       
console.log(handle_data(subtract));  
s
// O/p = 5
//       -1


//Example 8
function functionTwo(var1, var2, callback1, callback2) {
    callback1(var1);	
    callback2(var2);	
}

function a(y){ console.log(y); }
function b(z){ console.log(z); }
functionTwo(10, 20, a,b)

//O/p =  10
//       20
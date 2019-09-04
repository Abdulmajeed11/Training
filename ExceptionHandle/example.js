// Ex - 1
function idLog(x) {
    try {
        console.log(x);
        return 'result';
    } finally {
        console.log("FINALLY");
    }
}

idLog('arg')

// O/p: arg
//      FINALLY

  
//Example - 2

function throwIt(exception) {
    try {
        throw exception;
    } catch (e) {
        console.log('Caught: '+e);
    }
}

throwIt(3); // O/p-  caught : 3
throwIt('Hello');  // O/p-  caught : Hello
throwIt(new Error('An error happened'));    // O/P: Caught: Error: An error happened


// Example - 3
function throwsError() {
    throw new Error('Sorry...');
}
function cleansUp() {
    try {
        throwsError();
    } finally {
        console.log('Performing clean-up');
    }
} 
cleansUp()

// O/p: Performing clean-up
//      Error: Sorry...


// Example - 4 

var count = 0;
function countUp() {
    try {
    	console.log(count)
        return count;
    } finally {
        count++;  // (1)
      console.log(count)
    }
}

countUp()

// O/p: 0
//      1 


//Example - 5

function catchIt() {
    try {
        throwIt();
    } catch (e) {
        console.log(e.stack); // print stack trace
    }
}
function throwIt() {
    throw new Error('new error ');
} 

catchIt()

//O/p - Error : new Error


// Example - 6 

const a = 5
try {
    console.log(b) // b is not defined, so throws an error
} catch (err) {
    console.error(err) // will log the error with the error stack
}

console.log(a) // will be princted as exception is caught 

// O/P: ReferenceError: b is not defined
//      5


//Example - 6 

const a = 5
try {
    console.log(b) // b is not defined, so throws an error
} catch (err) {
    console.error(err) // will log the error with the error stack
} finally {
    console.log(a) // will always get executed
}

// O/p: ReferenceError: b is not defined
//      5

// Example - 7
 var a = 80;
 function welcome()
{
    cat()
}
function displayMessage()
{
    try
    {
        welcome();     
    }
    catch(error)
    {
        console.log(error);
    }finally{
    	console.log(a)
    }
}

welcome()
//console.log(a)


//Example nesting

function a()
{
	try{
		//throw Error('Error in a')
			try{
				b()
			//	throw Error('Error in b')
				try{
                     c() 
                   //  throw Error("error in c")
				     try{
                        d()
                       // throw Error("Error in d ")
				         try{
				         	 e()
				         	 //throw Error("Error in e")
				         }
				         catch(err){
				         	console.log(err,"----5----")
				         }
				     }
				     catch(err){
				     	console.log(err,"---4---")
				     }
				}
				catch(err){
                  console.log(err,"----3----")
				}
			}
			catch(err){
				console.log(err,"----2-----")
			}
		}
 	catch(err){
      console.log(err,"-----1-----")
	}
}

function b(){
	console.log("Hello")
}

function c(){
	console.log("world")
}

function d(){
	console.log("how are")
}

function e(){
	console.log("you")
}

a()


// Trying with the asynchronous nature of the code

//Aysnchronous

function asyn(){
	try{
	setTimeout(function(){
		throw Error("This is the error")
		console.log("Hello")
	},3000);
}catch(err){
     console.log(err,"this is the asyn error");     // Dosent come here
}
}

asyn()


// //Synchronous

function sync()
{
	try{
		throw Error("Throwing error")
	temp()	
	}
	catch(err){
    console.log(err,"error caught here")
	}
}

function temp(){
	console.log("hello")
}

sync()


//conclusion : try and catch will not catch asynchoronous code
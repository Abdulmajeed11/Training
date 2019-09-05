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
        console.log('Caught: ' + e);
    }
}

throwIt(3); // O/p-  caught : 3
throwIt('Hello'); // O/p-  caught : Hello
throwIt(new Error('An error happened')); // O/P: Caught: Error: An error happened


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
        count++; // (1)
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

function welcome() {
    cat()
}

function displayMessage() {
    try {
        welcome();
    } catch (error) {
        console.log(error);
    } finally {
        console.log(a)
    }
}
welcome()
//console.log(a)


//Example nesting

function a() {
    try {
        //throw Error('Error in a')
        try {
            b()
            //  throw Error('Error in b')
            try {
                c()
                //  throw Error("error in c")
                try {
                    d()
                    // throw Error("Error in d ")
                } catch (err) {
                    console.log(err, "---4---")
                }
            } catch (err) {
                console.log(err, "----3----")
            }
        } catch (err) {
            console.log(err, "----2-----")
        }
    } catch (err) {
        console.log(err, "-----1-----")
    }
}

function b() {
    let json = '{bad json}'
    let user = JSON.parse(json);

    // let user = {name:'abdul'} 
    console.log(user.name);
}

function c() {
    let json = '{bad json}'
    let user = JSON.parse(json);
    console.log(user.name);
}

function d() {
    let json = '{bad json}'
    let user = JSON.parse(json);
    console.log(user.name);
}

a()


// Trying with the asynchronous nature of the code

// Mistake- try block was outsite the async function, it should have been inside the function like below 
//Aysnchronous
function asyn() {
    setTimeout(function() {
        try {
            throw Error("This is the error")
            console.log("Hello")
        } catch (err) {
            console.log(err, "this is the asyn error"); // Dosent come here
        }
    }, 3000);
}
asyn()

Synchronous

function sync() {
    try {
        throw Error("Throwing error")
        temp()
    } catch (err) {
        console.log(err, "error caught here")
    }
}

function temp() {
    console.log("hello")
}

sync()


//conclusion: place the try and catch block right in an asynchronous code


//try..catch with nested functions

function a() {
    try {
        b()

        function b() {
            // let json = '{bad json}'
            // let user = JSON.parse(json); 

            let user = {
                name: 'abdul'
            }
            console.log(user.name);
            c()

            function c() {
                try {
                    // let json = '{bad json}'
                    // let user = JSON.parse(json); 

                    let user = {
                        name: 'majeed'
                    }
                    console.log(user.name);

                } catch (err) {
                    console.log(err, "---3---")
                }
                d()

                function d() {
                    try {
                        //  let json = '{bad json}'
                        // let user = JSON.parse(json); 

                        let user = {
                            name: 'bruce'
                        }
                        console.log(user.name);
                    } catch (err) {
                        console.log(err, "inside the function err")
                    }
                }
            }
        }
    } catch (err) {
        console.log(err, "Error caught")
    }
}
a()
// empty array
function lastElement(array) {
    if (array.length > 0)
        return array[array.length - 1];
    else
        throw exception;
}

function lastElementPlusTen(array) {
    return lastElement(array) + 10;
}

try {
    console.log(lastElementPlusTen([]));
} catch (error) {
    console.log("Something went wrong: ", error);
}


//Without function
try {
    nonExistentFunction();
} catch (error) {
    console.log(error, "this is the error");
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}


//with try..catch
var validateObject = function(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Invalid object');
    }
};

try {
    validateObject('123');
} catch (err) {
    console.log('Thrown: ' + err.message);
}


//Wth callback
var validateObject = function(obj, callback) {
    if (typeof obj !== 'object') {
        return callback(new Error('Invalid object'));
    }
    return callback();
};

validateObject("123", function(err) {
    console.log('Callback: ' + err);
});


//without variable
try {
    setTimeout(function() {
        console.log('Start of try runs'); // (1) <--
        lalala; // error, variable is not defined!
        console.log('End of try (never reached)'); // (2)
    }, 1000)
} catch (err) {
    console.log(`Error has occurred!`); // (3) <--

}


// ErrorHandler-Test1
var test = null;
test.arg = 5;
// ErrorHandler-Test2
throw (new Error("Hello"));
// ErrorHandler-Test3
throw "Hello again";
// ErrorHandler-Test4
throw {
    myMessage: "stuff",
    customProperty: 5,
    anArray: [1, 2, 3]
};
// ErrorHandler-Test5
try {
    var test2 = null;
    test2.arg = 5;
} catch(e) {
     console.log(e);
}
// ErrorHandler-Test6
try {
    throw (new Error("Goodbye"));
} catch(e) {
    console.log(e);
}
// ErrorHandler-Test7
try {
    throw "Goodbye again";
} catch(e) {
     console.log(e);
}
// ErrorHandler-Test8
try {
    throw {
        myMessage: "stuff",
        customProperty: 5,
        anArray: [1, 2, 3]
    };
} catch(e) {
    console.log(e);
}


try {
    var x = 90;
    var value = x / y;
}
catch (err) {
    console.log(err);
}


//Without variable 
setTimeout(function() {
    try {
        noSuchVariable;
    } catch {
        console.log("error is caught here!");
    }
}, 1000);



//Exmaple
function a() {
    let json = "{ bad json }";

    try {

        let user = JSON.parse(json);
        console.log(user.name);
    } catch (e) {
        console.log(e, "---error---")
    }
}

a()



// multiple try catch with multple function 

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




// try catch with multple function with anonymous functionality
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


                    setTimeout(function() {
                        // try{
                        //  throw Error('Anonomous Error')

                        let json = '{bad json}'
                        let user = JSON.parse(json);
                        // }
                        // catch(err){
                        //   console.log(err,"--22--")
                        // }
                    }, 3000)


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




//with one try catch
function a() {
    try {
        b()

        function b() {
            let json = '{bad json}'
            let user = JSON.parse(json);

            // let user = {name:'abdul'} 
            // console.log( user.name );
            c()

            function c() {

                // let json = '{bad json}'
                // let user = JSON.parse(json); 

                let user = {
                    name: 'majeed'
                }
                console.log(user.name);
                d()

                function d() {

                    //  let json = '{bad json}'
                    // let user = JSON.parse(json); 

                    let user = {
                        name: 'bruce'
                    }
                    console.log(user.name);
                }
            }
        }
    } catch (err) {
        console.log(err, "Error caught")
    }
}
a()





//Example
const verifyUser = function(username, password, callback){
   dataBase.verifyUser(username, password, (error, userInfo) => {
       if (error) {
           callback(error)
       }else{
           dataBase.getRoles(username, (error, roles) => {
               if (error){
                   callback(error)
               }else {
                   dataBase.logAccess(username, (error) => {
                       if (error){
                           callback(error);
                       }else{
                           callback(null, userInfo, roles);
                       }
                   })
               }
           })
       }
   })
};
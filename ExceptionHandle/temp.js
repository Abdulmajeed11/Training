

// empty array
function lastElement(array) {
  if (array.length > 0)
    return array[array.length - 1];
  else
   // throw "Can not take the last element of an empty array.";
    throw exception;
}

function lastElementPlusTen(array) {
  return lastElement(array) + 10;
}

try {
  console.log(lastElementPlusTen([]));
}
catch (error) {
  console.log("Something went wrong: ", error);
}






//Without function
try {
  nonExistentFunction();
}
catch(error) {
  console.log(error,"this is the error");
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}




//with try..catch
var validateObject = function (obj) {
    if (typeof obj !== 'object') {
        throw new Error('Invalid object');
    }
};

try {
    validateObject('123');
}
catch (err) {
    console.log('Thrown: ' + err.message);
}




//Wth callback
var validateObject = function (obj, callback) {
    if (typeof obj !== 'object') {
        return callback(new Error('Invalid object'));
    }
    return callback();
};

validateObject("123", function (err) {
    console.log('Callback: ' + err);
});



//without variable
try {
	setTimeout(function(){
  console.log('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  console.log('End of try (never reached)');  // (2)
},1000)
} catch(err) {
  console.log(`Error has occurred!`); // (3) <--

}




//Without variable 
setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log( "error is caught here!" );
  }
}, 1000);





function a(){
let json = "{ bad json }";

try {

  let user = JSON.parse(json); 
  console.log( user.name );
} catch (e) {
  console.log(e,"---error---")
}
}

a()


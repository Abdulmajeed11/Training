var a = 10                        // public throughout the function and exported 
var b = 20                      //   public in this function but not exporting hence its private to 
                                //   the other files
var obj = {first :'abdul'}

var first =  function(){

  console.log('hello');
}

var second = function(){
  console.log('second');
}

var third = function(){
	var b = 30;
	console.log(b)
}

module.exports ={
  a,first,second,obj,third
};
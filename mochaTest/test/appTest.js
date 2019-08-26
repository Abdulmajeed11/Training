var assert = require('chai').assert;
// var sayHello =  require('../app').sayHello;
// var addNumbers =  require('../app').addNumbers;
var app = require('../app.js');


//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5)


describe('App',function(){
   describe('sayHelllo',function(){
   	it('should return hello',function(){
	//	let result = app.sayHello()
		assert.equal(sayHelloResult ,'hello')
	});

    it('sayHello should return type string',function(){
    //	let result = app.sayHello()
    	assert.typeOf(sayHelloResult ,'string')
    });	
   })

   describe('addNumbers',function(){
   	  it('should addNumbers and be above 5',function(){
   // 	let result = app.addNumbers(5,4)
        assert.isAbove(addNumbersResult,5)
    })
    it('should return the type as number',function(){
   // 	let result = app.addNumbers(5,3)
    	assert.typeOf(addNumbersResult,'number')
    })
   })
  
});

 

var assert = require('chai').assert;
var app = require('../app.js');


//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5)


describe('App',function(){
   describe('sayHelllo',function(){
   	it('should return hello',function(){
		assert.equal(sayHelloResult ,'hello')
	});

    it('sayHello should return type string',function(){
    	assert.typeOf(sayHelloResult ,'string')
    });	
   })

   describe('addNumbers',function(){
   	  it('should addNumbers and be above 5',function(){
        assert.isAbove(addNumbersResult,5)
    })
    it('should return the type as number',function(){
    	assert.typeOf(addNumbersResult,'number')
    })
   })
  
});

 

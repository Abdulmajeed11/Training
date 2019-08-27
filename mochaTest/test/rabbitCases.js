var assert = require('chai').assert;
var app = require('../rabbitTut/6/server.js');

var fib = app.fibonacci(5);
var fib2 = app.fibonacci(10);

describe('App',function(){
   describe('fib',function(){
   	it('should return the fib value as 5',function(){
		assert.equal(fib ,5)
	});
	it('should return the fib value as 55',function(){
		assert.equal(fib2,55);
	})
   it('should fail as the value given is wrong',function(){
   	assert.equal(fib,11);
   });
   it('should also fail an the value in given wrong',function(){
   	assert.equal(fib,22);
   })
});
  });



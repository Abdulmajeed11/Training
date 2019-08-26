var assert = require('assert');
var x = { a : { n: 0 } };
var y = { a : { n: 0 } };
var z = { a : { n: 1 } };
describe("deep equal example",function(){
	it('should return the value',function(){
		assert.deepEqual(x, y); //OK
   //     assert.deepEqual(x, z); /*AssertionError: { a: { n: 0 } } deepEqual {a: { n: 1 } }*/
	})
})

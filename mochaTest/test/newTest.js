describe('async test',function(){
	it("where we forget the done() callback!", function(done){
    setTimeout(function() {
        console.log("Test");
    }, 200);
    done()
})
})

it("where we forget the done() callback!", function(done){
    setTimeout(function() {
        console.log("Test");
    }, 200);
});

it("Using setTimeout to simulate asynchronous code!", function(done){
    setTimeout(function() {
        done();
    }, 1500);
})

it("Using setTimeout to simulate asynchronous code!", function(done){
    setTimeout(function() {
        done(new Error("This is a sample failing async test"));
    }, 200);
});

var http = require('http');
var assert = require('assert')
describe('sample tests:', function() {
  it('callback', function(done) {
    http.get('http://www.example.com', function(res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});




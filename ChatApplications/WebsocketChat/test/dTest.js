// This is an example of mocha to understand hooks

// before() is run once before all the tests in a describe
// after()   is run once after all the tests in a describe
// beforeEach() is run before each test in a describe
// afterEach()   is run after each test in a describe

describe("top", function () {
    before(function () {
        console.log("top before");
    });
    after(function () {
        console.log("top after");
    });
    beforeEach(function () {
        console.log("top beforeEach");
    });
    afterEach(function () {
        console.log("top afterEach");
    });
    it("test1", function () {
        console.log("top test1");
    });
    describe("sublevel", function() {
        before(function () {
            console.log("sublevel before");
        });
        after(function () {
            console.log("sublevel after");
        });
        beforeEach(function () {
            console.log("sublevel beforeEach");
        });
        afterEach(function () {
            console.log("sublevel afterEach");
        });
        it("test1", function () {
            console.log("sublevel test1");
        });
         it("test2", function () {
            console.log("sublevel test2");
        });
    });
    it("test2", function () {
        console.log("top test2");
    });
});

// O/p:
//  top before
// top beforeEach
// top test1
// ․top afterEach
// top beforeEach
// top test2
// ․top afterEach
// sublevel before
// top beforeEach
// sublevel beforeEach
// sublevel test1
// ․sublevel afterEach
// top afterEach
// top beforeEach
// sublevel beforeEach
// sublevel test2
// ․sublevel afterEach
// top afterEach
// sublevel after
// top after


var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

 describe('Access to DB', function(){
   describe('#pass', function(){
it('should pass',function(){
   assert.typeOf(foo, 'string'); // without optional message 
})
it('should pass',function(){
  assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
})
it('should pass',function(){  
  assert.equal(foo, 'bar', 'foo equal `bar`');
})
it('should pass',function(){
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
})
it('should pass',function(){
   assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
})
})
})
  
  describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
     assert.equal([1, 2, 3].indexOf(5),-1);
    });
    it('should give right value',function(){
     assert.equal([1, 2, 3].indexOf(0),-1);
    })
  });
});


//pending case
describe('Array', function() {
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});


//it only

describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      assert.equal(5,5)
    });
    it.only('should return -1 unless present', function() {
      assert.equal(5,5)
    });
    it('should return the index when present', function() {
     assert.equal(6,7)
    });
  });
});


//describe only

describe('Array', function() {
  describe.only('#indexOf()', function() {
    it('should return -1 unless present', function() {
     assert.equal(5,5)
    });

    it('should return the index when present', function() {
      assert.equal(5,5)
    });
  });

  // describe.only('#concat()', function() {
  //   it('should return a new Array', function() {
  //     assert.equal(5,5)
  //   });
  // });

  describe('#slice()', function() {
    it('should return a new Array', function() {
      assert.equal(5,5)
    });
  });
});

//when you execute the first describe.only two cases are run but when you uncomment both the 
//describe.only only the second one is executed


//skip
describe('Array', function() {
  describe('#indexOf()', function() {
    it.skip('should return -1 unless present', function() {
     assert.equal(5,5);
    });

    it('should return the index when present', function() {
     assert.equal(5,5);
    });
  });
});

//You may also skip at runtime using this.skip()
// eg:
it('should only test in the correct environment', function() {
  if ( check test environment ) {
    // make assertions
  } else {
    this.skip();
  }
});

//timeout
describe('a suite of tests', function() {
  this.timeout(3000);

  it('should take less than 500ms', function(done) {
    setTimeout(done, 2500);
  });

  it('should take less than 500ms as well', function(done) {
    setTimeout(done, 1500);
  });
});


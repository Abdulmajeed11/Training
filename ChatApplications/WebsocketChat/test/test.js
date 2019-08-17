var assert = require('assert');
var mysql = require('mysql'); 
var conn = require('../chatdb.js');

// Checking the connection  (should pass)

 describe('Access to DB', function(){
   describe('#pass', function(){
        it('should pass as correct details are given', function(done){
     //      var conn = mysql.createConnection({
			  // host: "127.0.0.1",  
			  // user: "root",  
			  // password: "0000" ,
			  // database : "mydb"          
			  //  });
     //        conn.connect(done);
        conn.connection.connect(function(err,result) {
        console.log("is it coming here")
        if(err){
           assert.equal(err,'Connection Error');
            return;
        }
      //  expect(result).to.equal("Connected");
      console.log(err,result)
       assert.equal(result,'Connected');
        done();
    });

        });
    })
});


//Checking the connection with wrong values (should fail)
 
 describe('Access to DB', function(){
   describe('#fail', function(){
        it('should return -1 because wrong credentials', function(done){
            var connection = mysql.createConnection({
                host: '127.0.0.1',
                user: 'dummy user',
                password: 'dummy password',
                database: 'mydb'
            });
            connection.connect(done);
        });
    })
});

// displaying the old  messages

describe('displaying messages',function(){
	before(function(done){
   conn.saveMsg('majeed','HHHHH',function(e,o){
		if(!e)
		     done()
		})

})		
	describe('pass',function(){
		it('should pass by giving the old messages',function(done){
       var temp = conn.oldMsg('majeed',function(e,o){
		//console.log(e,o);
		assert.equal(o.length,11);
		done()
		})
	})
})
})


describe('inserting message in db',function(){
	describe('pass',function(){
		it('should pass as message is being inserted',function(done){
          
       var temp = conn.saveMsg('abdul','Hello',function(e,o){
	  //	console.log(e,o);
		assert.equal(o.affectedRows,1);
		done()
		})
	})
})
})


describe('inserting message in db for private messaging',function(){
	describe('pass',function(){
		it('should pass as message is being inserted',function(done){        
       var temp = conn.privateMsg('abdul','kane','hello',function(e,o){
	 //	console.log(e,o);
	    assert.equal(o.affectedRows, 1);    
		done()
		})
	})
})
})


// not passing all the parameters

describe('inserting message in db for private messaging',function(){
	describe('#fail',function(){
		it('should pass as message is being inserted',function(done){        
       var temp = conn.privateMsg('abdul','hi',function(e,o){          // not passing to parameter
		console.log(e,o); 
	    assert.equal(o.affectedRows, 1);                      
		done()
		})
	})
})
})




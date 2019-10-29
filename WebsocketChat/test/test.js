// var assert = require('assert');
var assert = require('chai').assert
var mysql = require('mysql'); 
var conn = require('../chatdb.js');

// Checking the connection  (should pass)

 describe('Access to DB', function(){
   describe('#pass', function(){
        it('should pass as correct details are given', function(done){
          var conn = mysql.createConnection({
			  host: "127.0.0.1",  
			  user: "root",  
			  password: "00000" ,
			  database : "mydb"          
			   });
            conn.connect(done);


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


// displaying the old  messages with insert functionality (1st way)

describe('displaying messages',function(){
	before(function(done){
   conn.saveMsg({name:'majeed',message:'Hello'},function(e,o){     // inserts the message before starting 
		if(!e)
		     done()
		})

 })		
	describe('pass',function(){
	it('should pass by giving the old messages',function(done){
      conn.oldMsg({name:'majeed'},function(e,o){
    	assert.typeOf(o,'array')                      // checking the type
	    done()
		 })
   })
	 it('should pass',function(done){
        conn.oldMsg({name:'majeed'},function(e,o){
		assert.equal(o.length,85);                 // comparing with length
        done()
     
})
    })
   it('should pass',function(done){
   	conn.saveMsg({name:'majeed',message:'hi'},function(e,o){    //  adding again 
   		console.log(e,o)
        assert.equal(o.affectedRows,1)
   		done()
   	})
   })
   	 it('should pass',function(done){
      conn.oldMsg({name:'majeed'},function(e,o){
		assert.equal(o.length,86);                 // comparing with length again
        done()
     
})
})
})
})


//checking with two insert 

describe('inserting message in db',function(){
      before(function(done){
   conn.saveMsg({name:'majeed',message:'kkkkk'},function(e,o){
		if(!e)
		     done()
		})
})

	describe('pass',function(){
		it('should pass as message is being inserted',function(done){       
       conn.saveMsg({name:'majeed',message:'Hello'},function(e,o){
	  //	console.log(e,o);
		assert.equal(o.affectedRows,1);
		done()
		})
	})
})
})

// displaying the old  messages with insert functionality (2nd way)

describe('inserting message in db',function(){
	describe('pass',function(){
		it('should pass as message is being inserted',function(done){    
       conn.saveMsg({name:'majeed',message:'Hellooo'},function(e,o){
       	if(!e)
       conn.oldMsg({name:'majeed'},function(e,o){
		assert.equal(o.length,76);
		done()
		})
	})
})
})
})

// trying out with errors

describe('inserting message in db',function(){         // passing nothing
	describe('pass',function(){
		it('should pass as error is given',function(done){    
       conn.saveMsg({},function(e,o){
      // 	console.log(e,o,"this is in test")
		assert.equal(e,"Error: ER_BAD_NULL_ERROR: Column 'name' cannot be null");
		done()
     })
	})
    it('should pass as error is given',function(done){               //just passing name no message
    	conn.saveMsg({name:'kane'},function(e,o){
    //		console.log(e,o,"this is the test - 2")
    	assert.equal(e,"Error: ER_BAD_NULL_ERROR: Column 'message' cannot be null")
       done()
    	})
    })
      it('should pass as error is given',function(done){               //just passing name no message
    	conn.saveMsg({message:'helloooo'},function(e,o){
    		// console.log(e,o,"this is the test - 3")
    	assert.equal(e,"Error: ER_BAD_NULL_ERROR: Column 'name' cannot be null")
       done()
    	})
    })
     it('passing empty name and message ',function(done){               //just passing name no message
     conn.saveMsg({name:'',message:''},function(e,o){
    // console.log(e,o,"this is the test - 4")
     assert.equal(e,null)
       done()
    	})
    })
    it('passing empty name and message ',function(done){               //just passing name no message
    conn.saveMessage({name:'abdul',message:'whats up?'},function(e,o){
    //console.log(e,o,"this is the test - 5")
    assert.equal(e,null)
     done()
    	})
    })
})
})

// displaying old messages

describe('inserting message in db',function(){         // passing nothing
	describe('pass',function(){
		it('should pass as error is given',function(done){    
       conn.oldMsg({name:"abdul"},function(e,o){
		assert.equal(o.length,78)
		done()
	})
})
     })
	})

// comparing the private chat

describe('inserting message in db for private messaging',function(){
	describe('pass',function(){
		it('should pass as message is being inserted',function(done){        
        conn.privateMsg({name:'abdul',toUser:'kane',message:'hello'},function(e,o){
	 //	console.log(e,o);
	    assert.equal(o.affectedRows, 1);    
		done()
		})
	})
})
})

// not passing all parameters

describe('inserting message in db for private messaging',function(){
	describe('#fail',function(){
		it('should pass as message is being inserted',function(done){        
       var temp = conn.privateMsg({name:'abdul'},function(e,o){          // not passing to parameter
		console.log(e,o); 
	    assert.equal(o.affectedRows, 1);                      
		done()
		})
	})
})
})




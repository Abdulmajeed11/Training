var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "127.0.0.1",  
  user: "root",  
  password: "0000" ,
  database : "mydb" 
});  
connection.connect(function(err,res) {  
 if(err) console.log("Connection Error")
 else{
  console.log("Connected");  
}
});

// Asynchronous error hadnelling for database operations

// INSERT
function insert(callback){
     var today =  new Date();
	 var user = {
        "name":"kane",
        "message":"Hello",
        "created_at":today,
        "updated_at":today
	} 
   connection.query("INSERT into chatt set ?",user,function(err,out){
  if(err) callback(err,null)
  else callback(null,out)
})
}

insert(function(e,o){
	if(e) console.log(e,"insert error")
    else console.log(o,"insert success")
})


//SELECT
function select(callback){
	connection.query('SELECT * from chatt', function (err,res) {
    if(err)callback(err,null)
    else callback(null,res)
	})
}

select(function(e,o){
	if(e) console.log(e,"select error")
    else console.log(o,"select success")
})


//DELETE
function del(callback){
	connection.query('Delete from chatt',function(err,res){
		if(err) callback(err,null);
	    else callback(null,res);
 	})
}

del(function(e,o){
	if(e) console.log(e,"delete error")
	else console.log(o,"delete success")
})


//Nested Async DB operations 

function Oper() {
  try {
    insert(function(e, o) {
      if (e) console.log(e, "insert error")
      else console.log(o, "insert success")
    })

    function insert(callback) {
      var today = new Date();
      var user = {
        "name": "kane",
        "message": "Hello",
        "created_at": today,
        "updated_at": today
      }
      connection.query("INSERT into chatt set ?", user, function(err, out) {
        if (err) callback(err, null)
        else callback(null, out)
      })

      select(function(e, o) {
        if (e) console.log(e, "select error")
        else console.log(o, "select success")
      })

      function select(callback) {
        connection.query('SELECT * from chatt', function(err, res) {
          if (err) callback(err, null)
          else callback(null, res)
        })

        del(function(e, o) {
          if (e) console.log(e, "delete error")
          else console.log(o, "delete success")
        })

        function del(callback) {
          connection.query('Delete from chatt', function(err, res) {
            if (err) callback(err, null);
            else callback(null, res);
          })
        }
      }
    }
  } catch (err) {
    console.log(err, "caught error")
  }
}

Oper()




//Nested DB operations - 2 

function Oper() {
  try {
   insert(function(e) {
    if (e) console.log(e, "insert error")
    })

    function insert(callback) {
     var today = new Date();
     var user = {
      "name": "kane",
      "message": "Hello",
      "created_at": today,
      "updated_at": today
      }
     connection.query("INSERT into chatt set ?", user, function(err, out) {
       if(err) callback(err, null)
       else {
        try{
       console.log(out, "insert output")
       select(function(e) {
       if (e) console.log(e, "select error")
       })
     }catch(err){
      console.log(err,"checking")
     }

     function select(callback) {
      connection.query('SELECT * from chatt', function(err, res) {
       if (err) callback(err, null)
       else {
        try{
       console.log(res, "select res")
       del(function(e, o) {
       if (e) console.log(e, "delete error")
       else console.log(o, "delete success")
        })
      }catch(err){
        console.log(err,"Error")
      }
     function del(callback) {
     connection.query('Delete from chatt', function(err, res) {
     if (err) callback(err, null);
     else
       try {
          callback(null, res);
           }
       catch(err) {
         console.log(err, "Trying to ctach an error")
                    }
                  })
                }
              }
            })
          }
        }
      })
    }
  } catch (err) {
    console.log(err, "caught error")
  }
}


Oper()
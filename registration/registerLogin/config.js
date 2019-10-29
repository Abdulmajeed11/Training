

var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "127.0.0.1",  
  user: "root",  
  password: "0000" ,
  database : "mydb" 
});  
connection.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  


// Database operation in this file but sending response from index.js file
 
 module.exports.register=function(name,email,password,callback){
   var today = new Date();
 console.log('is this getting printed')

    var users={
        "name":name,
        "email":email,
        "password":password,
        "created_at":today,
        "updated_at":today
    }
    console.log(users,'is is coming here after users')
      return connection.query('INSERT INTO users SET ?',users, callback) 
    
}

module.exports.authenticate=function(email,password,callback){
       var email= email;
       var password= password;
       return connection.query('SELECT * FROM users WHERE email = ?',[email],callback )

}

module.exports.connection = connection;


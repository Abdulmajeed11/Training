var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'mydb'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});


 module.exports.register=function(req,res,callback){
 //  var today = new Date();
 console.log('is this getting printed')
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }
    console.log(users.name,'is is coming here after users')

 // var encryptedString = cryptr.encrypt(req.body.password);
      return connection.query('INSERT INTO users SET ?',users, callback) 
}



module.exports.authenticate=function(req,res,callback){
       var email=req.body.email;
    var password=req.body.password;
 return connection.query('SELECT * FROM users WHERE email = ?',[email],callback )
}




module.exports.connection = connection;


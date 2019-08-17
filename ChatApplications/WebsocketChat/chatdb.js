var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "127.0.0.1",  
  user: "root",  
  password: "0000" ,
  database : "mydb" 
});  
connection.connect(function(err,res) {  
/*  if (err) throw err;  */
 if(err){
  console.log("Connection Error")
 }
 else{
  console.log("Connected");  
}
});  

// module.exports.saveUser = function(socket,name,callback){
//   name=socket.nickname
//   return connection.query("INSERT INTO chat (name) VALUES ('"+name+"')",callback)
// }

module.exports = {
  saveMsg : function(name,message,callback){
   var today = new Date();
    var users={
        "name":name,
        "message":message,
        "created_at":today,
        "updated_at":today
    }

connection.query("INSERT into chat set ?",users,callback)

},
 oldMsg : function(namee,callback){
   connection.query("SELECT name,message from chat where name = ?",namee,callback);
},
privateMsg : function(name,toUser,message,callback){
                      var today = new Date();
                    var users={
                    "name":name,
                    "toUser":toUser,
                    "message":message,
                    "created_at":today,
                    "updated_at":today
}
 connection.query('Insert into chat set ?',users,callback);
}
}
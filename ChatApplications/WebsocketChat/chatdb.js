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

module.exports.saveUser = function(socket,name,callback){
  name=socket.nickname
  return connection.query("INSERT INTO chat (name) VALUES ('"+name+"')")
}

module.exports.saveMsg = function(name,message,callback){
   var today = new Date();
    var users={
        "name":name,
        "message":message,
        "created_at":today,
        "updated_at":today
    }

 return connection.query("INSERT into chat set ?",users,callback)

};

module.exports.oldMsg = function(callback){
  return connection.query("SELECT * from chat")
}

module.exports.privateMsg = function(toUser,message,callback){
                      var today = new Date();
                    var users={
                    "toUser":toUser,
                    "message":message,
                    "created_at":today,
                    "updated_at":today
}
return connection.query('Insert into chat set ?',users);
}

module.exports.connection = connection;
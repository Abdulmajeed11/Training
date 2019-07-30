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
  return connection.query("INSERT INTO chat (name) VALUES ('"+name+"')",callback)
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
  console.log('is it coming here in chat db')
  return connection.query("SELECT name,message from chat",callback);
}

module.exports.privateMsg = function(toUser,message,callback){
                      var today = new Date();
                    var users={
                    "toUser":toUser,
                    "message":message,
                    "created_at":today,
                    "updated_at":today
}
return connection.query('Insert into chat set ?',users,callback);
}

module.exports.connection = connection;
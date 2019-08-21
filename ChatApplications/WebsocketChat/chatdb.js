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
  // saveMsg : function(name,message,callback){
   saveMsg : function(data,callback){
   var today = new Date();
    var users={
        "name":data.name,
        "message":data.message,
        "created_at":today,
        "updated_at":today
    }

// connection.query("INSERT into chat set ?",users,callback)
connection.query("INSERT into chat set ?",users,function(err,out){
  if(err)
  {
  // console.log("Error",err)
   return callback(err,null)
  }
  else
  {
  //console.log("Success",out);
 return callback(null,out);
  }
})

},
 // oldMsg : function(namee,callback){
  oldMsg : function(data,callback){
    name = data.name
  // connection.query("SELECT name,message from chat where name = ?",namee,callback);
 connection.query("SELECT name,message from chat where name = ?",name,function(err,out){
  if(err)
  {
  // console.log("Error",err)
   return callback(err,null)
  }
  else
  {
   // console.log("Success",out);
    return callback(null,out);
  }
})

},
// privateMsg : function(name,toUser,message,callback){
  privateMsg : function(data,callback){
                      var today = new Date();
                    var users={
                    "name":data.name,
                    "toUser":data.toUser,
                    "message":data.message,
                    "created_at":today,
                    "updated_at":today
}
 connection.query('Insert into chat set ?',users,callback);
},
}

// exports.connection = connection;

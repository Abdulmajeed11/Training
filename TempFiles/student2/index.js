const express = require('express'),
    path = require('path'),
    socket = require('socket.io'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();
const router = require('express').Router();

// importing routes
const connection = require('./StudentDB')

// settings
app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html")
});

app.use(express.urlencoded({extended: false}));

// starting the server
server = app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
     socket.on('newUser',function(data,callback){
     console.log(data,"New user"); 

    connection.save(data,function(err,data){
    if(err) throw err;
    connection.list(data,function(err,data){
        if(err) throw err;
        console.log(data,"user Data");
        
         })
    })
})

      socket.on('editUser',function(data,callback){
      console.log(data,"edit user data");
     
       connection.update(data,function(err,data){
        if (err) throw err;
       })
     })
   
   socket.on('deleteUser',function(data,callback){
    console.log(data,"the deleted user data")
    connection.delete(data,function(err){
      if(err) throw err;
    })
   })

 })
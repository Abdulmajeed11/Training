const express = require('express'),
    path = require('path'),
    socket = require('socket.io'),
    mysql = require('mysql');

const app = express();
const connection = require('./StudentDB')

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html")
});

app.get('/update/:id',function(req,res){
  res.sendFile(__dirname+"/public/indexEdit.html")
})

app.use(express.urlencoded({extended: false}));

// starting the server
server = app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

// Making the connection with socket.io
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on("oldUser",function(data,callback){
    console.log(data,"old data")
    connection.list(data,function(err,data){
        if(err) throw err;
        socket.emit("oldUserDisplay",data);
    })
 })

    socket.on('newUser',function(data,callback){
    console.log(data,"New user"); 

    connection.save(data,function(err,data){
    if(err) throw err;
    connection.saveList(data,function(err,data){
        if(err) throw err;
        console.log(data,"user Data");
        socket.emit("saveUser",data);
      })
   })
})

    socket.on('editUser',function(data,callback){
    console.log(data,"edit user data");
    connection.update(data,function(err,data){
        if (err) throw err;
        socket.emit('editedUser',data)
     })
  })

    socket.on('deleteUser',function(data){
    console.log(data.data[0],"server data")
    var data1 = data.data[0]
    connection.delete(data1,function(err,data){
        if(err) throw err;
        socket.emit('del',data1)
    })
 })

     socket.on('deleteUser2',function(data1){
     connection.delete(data1,function(err,data){
         if(err) throw err;
         socket.emit('del2',data1)
      })
   })
})






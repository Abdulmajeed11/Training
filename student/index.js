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
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/temp.html")
});

app.use(express.urlencoded({extended: false}));

// routes
router.get('/', connection.list);
router.post('/add', connection.save);
router.get('/update/:id', connection.edit);
router.post('/update/:id', connection.update);
router.get('/delete/:id', connection.delete);
app.use('/', router);

// starting the server
server = app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
     socket.on('newUser',function(data,callback){
     console.log("New user",data);        
    
    connection.save(data,function(err,data){
    if(err) throw err;
    connection.list(data,function(err,data){
        if(err) throw err;
        console.log(data,"user Data");
           socket.emit("saveUser",data);
         })
    })
})

     socket.on('editUser',function(data,callback){
        console.log("edit user data");
     })

    // socket.on('deleteUser',function(data,callback){
    //    console.log("this is the user data being deleted",data)
    //    connection.delete(data,function(err,data){
    //         if(err) throw err;
    //       console.log('deleted data',data);
    //       socket.emit("removeUser",data)
    //    })
    // })
 })
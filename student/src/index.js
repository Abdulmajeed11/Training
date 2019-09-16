const express = require('express'),
    path = require('path'),
    socket = require('socket.io'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();


// importing routes
const customerRoutes = require('./routes/customer');
const connection = require('./controllers/customerController')

// doing stuff
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/temp.html")
});

app.get('/',function(req,res){
    res.sendFile(__dirname+"/publi/tempEdit.html")
})

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

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
 })
const express = require('express'),
    path = require('path'),
    socket = require('socket.io'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();


// importing routes
const customerRoutes = require('./routes/customer');
const connection = require('./controllers/customerController')

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/temp.html")
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

    // socket.on('deleteUser',function(data,callback){
    //    console.log("this is the user data being deleted",data)
    //    connection.delete(data,function(err,data){
    //         if(err) throw err;
    //       console.log('deleted data',data);
    //       socket.emit("removeUser",data)
    //    })
    // })
 })
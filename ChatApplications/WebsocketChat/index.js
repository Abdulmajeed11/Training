var express = require('express');
var socket = require('socket.io');
var connection =  require('./chatdb.js');
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

var users={};

// Static files
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
});

var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
connection.oldMsg(function(err,docs){
if(err) throw err;
console.log("old messages")
socket.emit("load old messages",docs);
})

socket.on('new user',function(data,callback){
        console.log("New user");

        if(data in users)//if nickname exist
        {
            callback(false);
        }
        else
        {
            console.log("here");
            callback(true);
            socket.nickname=data; 
            name=socket.nickname;               //store nickname of each user becomes clear on disconnect
            users[socket.nickname]=socket;       //key value pair as defined above
              console.log("is this working fine")
    connection.saveUser(socket,name,function(){})
            updateNicknames();
     //    console.log(users)

        }
    });
    socket.on('sendmessage',function(data,callback){
        var msg=data.trim();
        if(msg[0]=='@')//if thats whisper or private msg
        {
            msg=msg.substr(1);//start of name onwards
            var idx=msg.indexOf(' ');
            if(idx!==-1)
            {
                //check the username is valid
                var name=msg.substr(0,idx);
                console.log(name,"@@@")

                msg=msg.substr(idx+1);
          //      if(users.indexOf(name)!== -1)
                 if(name in users)
                {
                    var today = new Date();
                    var toUser = socket.nickname;
                    connection.privateMsg(toUser,msg,function(){});                    
                    users[name].emit('whisper',{msg:msg,nick:socket.nickname});
                    console.log('whispered');   
                }
                else
                {
                    callback('Error! Enter a valid user');
                }   
            }
            else
            {
                callback('Error! Please enter a message for your whisper');
            }
        }
        else{
                   var today = new Date();
                  let name = socket.nickname;
                console.log(msg)
               connection.saveMsg(name,msg,function(){})
              io.sockets.emit('newmessage',{msg:msg,nick:socket.nickname});
       
}
    });


    function updateNicknames(){
        io.sockets.emit('usernames',Object.keys(users));//user name
    }

//diconnect
socket.on('disconnect',function(data){
    console.log('user disconnected');
    if(!socket.nickname)//when the user has no nickname 
            return;
        delete users[socket.nickname];
        updateNicknames();
})
});

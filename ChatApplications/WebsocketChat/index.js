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
    try{
    try{
    console.log('made socket connection', socket.id);
connection.oldMsg(function(err,docs){
if(err) throw err;
console.log("old messages")
socket.emit("oldmessages",docs);
})
}
catch(err){
    console.log(err)
}
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
   // connection.saveUser(socket,name,function(){})
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
                var toUser=msg.substr(0,idx);
                msg=msg.substr(idx+1);
          //      if(users.indexOf(name)!== -1)
                 if(name in users)
                {
                    var today = new Date();
                    var fromUser = socket.nickname;
                    connection.privateMsg(fromUser,toUser,msg,function(){});                    
                    users[toUser].emit('whisper',{msg:msg,nick:socket.nickname});
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
    try{
    console.log('user disconnected');
    if(!socket.nickname)//when the user has no nickname   
            return;
      socket.broadcast.emit('userDisconnect',{nick:socket.nickname});
        delete users[socket.nickname];
        updateNicknames();
}catch(err){
    console.log(err);
}
})
}catch(err)
{
    console.log(err);
}
});

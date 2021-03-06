var express = require('express');
var socket = require('socket.io');
var connection =  require('./chatdb.js');
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

var users={};
var connected = [];
var disconnectedUsers = [];


// Static files
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
});

var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

socket.on('new user',function(data,callback){
        console.log("New user");
  // sending the old messages of the user        
           socket.nickname=data; 
           name= data;   
           connection.oldMsg({name:name},function(err,docs){
           if(err) throw err;
          socket.emit("oldmessages",err,docs);
         })

//check the properties of a reconnected user
            if(users.hasOwnProperty(data))
            {
               if(data in disconnectedUsers)
               {
                users[data].broadcast.emit("reconnectedUser",data)
               }
            }
          console.log("here");
          callback(true);

           socket.nickname=data; 
           name=socket.nickname;               //store nickname of each user becomes clear on disconnect
           console.log(name,"second name")
           users[name] = socket;                //key value pair as defined above
           connected.push(socket.nickname); 
           disconnectedUsers.splice(disconnectedUsers.indexOf(socket.nickname), 1 ); 
            updateNicknames();
    });
    socket.on('sendmessage',function(data,callback){
        var msg=data.trim();
        if(msg[0]=='@') //if thats whisper or private msg
        {
            msg=msg.substr(1); //start of name onwards
            var idx=msg.indexOf(' ');
            if(idx!==-1)
            {
                //check the username is valid
                var toUser=msg.substr(0,idx);
                msg=msg.substr(idx+1);
              console.log(idx,toUser,msg,"values  ")
                //if(name in users)
                 if(toUser in users)
                {
                    var today = new Date();
                    var fromUser = socket.nickname;
                    connection.privateMsg({name:fromUser,toUser:toUser,message:msg},function(){});                    
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
                connection.saveMsg({name:name,message:msg},function(){})
                   io.sockets.emit('newmessage',{msg:msg,nick:socket.nickname});       
}
    });

    function updateNicknames(){
        io.sockets.emit('usernames',connected,disconnectedUsers);//user name
    }

socket.on('disconnect',function(data){
    console.log('user disconnected');
    if(!socket.nickname)  //when the user has no nickname
         return;

    socket.broadcast.emit('userDisconnect',{nick:socket.nickname});
    disconnectedUsers.push(socket.nickname);
     console.log('-----',disconnectedUsers);
    connected.splice(connected.indexOf(socket.nickname), 1 );    
})
});






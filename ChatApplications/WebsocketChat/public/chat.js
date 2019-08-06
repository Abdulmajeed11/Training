 $(function(){
            var socket=io.connect();
            var $nickform=$('#setnick');
            var $nickerror=$('#nicknameerror');
            var $nickbox=$('#nickname');
            var $messageform=$('#sendmessage');
            var $messageip=$('#message');
            var $chat=$('#chat');
            var $users=$('#users');
            $nickform.submit(function(e){
                e.preventDefault();
                if($nickbox.val()=='' || $nickbox.val()==" ")
                {
                    alert("not allowed");
                    return false;
                }
                socket.emit('new user',$nickbox.val(),function(data){//to check whether its a valid nickname or not
                    if(data){
                        $('#nickwrap').fadeOut();
                        $('#contentwrap').fadeIn();
                    }
                    // else
                    // {
                    //     $nickerror.html('That username is already taken...Try again!');
                    // }

                });
                $nickbox.val('');
            });
            $messageform.submit(function(e){
                e.preventDefault();
                socket.emit('sendmessage',$messageip.val(),function(data){
                
                    $chat.append('<span class="error"><b>'+data+"</span><Br>");     
                });
                $messageip.val("");//clear input field

            });


        
            socket.on('oldmessages',function(err,docs){
             //   console.log(docs)
                for(var i=0; i<docs.length;i++){
               // console.log(docs[i].name+" "+docs[i].message);
            $chat.append('<span class="normal"><b>'+docs[i].name+':-</b>'+docs[i].message+"</span><Br>");
                }

            })

            socket.on('newmessage',function(data){
                //console.log(data);
                displayMessage(data);
            });
            
            function displayMessage(data){
                $chat.append('<span class="normal"><b>'+data.nick+':-</b>'+data.msg+"</span><Br>");
            }

            socket.on('usernames',function(data){
                var str=' ';
                for(var i=0;i<data.length;i++)
                {
                    str+=data[i]+'<br/>';

                }
                $users.html(str).css("color","black");
             //   console.log(data,"%%")
            });
            socket.on('whisper',function(data){
                $chat.append('<span class="whisper"><b>'+data.nick+':-</b>'+data.msg+"</span><Br>");
            })
            
            socket.on('userDisconnect',function(data){
                 var str = [];
                str.push(data.nick)
                console.log(str)
                $chat.append('<span class= "userDisconnect"><b><em>'+ data.nick+'</em> </b>'+ "Is offline"+"</span><Br>" );
            //   console.log(data.nick,users)
              // $users.text(str).css("color","pink")
              $users.html(data.nick).css("color","pink")
              // $users.attr('<span class ="userList">'+ data.nick + '</span>');
                // console.log("Here",data,str)
           //       for(var i = 0;i< str.length;i++){
           // //      str.push(data)

           //        // str[i] = data.nick;
           //      // str.push(data.nick)
           //         console.log(str,data.nick,"is it coming here")
           //         if (data.nick == str[i])
           //        // if(data.nick.indexOf(str[0]) > -1)
           //          console.log("coming here",str[i])
           //          $users.html(str[i]).css("color","blue");
           //          console.log("after applying color")
          //    } 
            })

            // socket.on('UserReconnect',function(data){
            //     console.log(data.nick)
            //     str = [];
            //     str.push(data.nick)
            // $users.html(str).css("color","black");
            // }
        }); 
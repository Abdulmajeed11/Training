
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
                for(var i=0; i<docs.length;i++){
            $chat.append('<span class="normal"><b>'+docs[i].name+':-</b>'+docs[i].message+"</span><Br>");
                }

            })

            socket.on('newmessage',function(data){
                displayMessage(data);
            });
            
            function displayMessage(data){
                $chat.append('<span class="normal"><b>'+data.nick+':-</b>'+data.msg+"</span><Br>");
            }

            socket.on('usernames',function(data,data2){ 
                var str=' ';
                var str2 ='';
             console.log(data,data2, "5555")
                for(var i=0;i<data.length;i++)    
                {
                  // str+=data[i]+'<br/>';
                  //  str+=`<p id="#id_">${data[i]}</p> `
                   str+=`<p id="id_${data[i]}" style ="color : black">${data[i]}</p> `      
                }
                for(var j=0;j<data2.length;j++){
                   str2+=`<p id="id_${data2[j]}" style="color:red">${data2[j]}</p>`
                }
               $users.html(str)
               $users.append(str2)
               // $(`id_${data[i]}`).css("color",black)
            
            });
            socket.on('whisper',function(data){
                $chat.append('<span class="whisper"><b>'+data.nick+':-</b>'+data.msg+"</span><Br>");
            })
            

            socket.on('userDisconnect',function(data){
                console.log(data.nick)
                $chat.append('<span class= "userDisconnect"><b><em>'+ data.nick+'</em> </b>'+ "Is offline"+"</span><Br>" );
              // $users.val(data).css("color","red");
               $(`#id_${data.nick}`).css("color","red")
            //   console.log(`#id_${data.nick}`)
           })
               socket.on('reconnectedUser',function(data){
                console.log(data.nick, "user reconnect")
               $(`#id_${data.nick}`).css("color","black")
         })
        });    
 
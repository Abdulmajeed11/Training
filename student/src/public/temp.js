
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
             var $content=$('#content');
             var $userList = $('#userList');
               $saveuser.submit(function(e){
                e.preventDefault();
                console.log("here-----")
                if($username.val()=='' || $username.val()==" "||$useraddress.val()=='' || $useraddress.val()==" "
                    || $userphone.val()=='' || $userphone.val()==" ")
                {   
       
                    alert("not allowed");
                    return false;
                }
                console.log("is this getting here",$username.val(),$useraddress.val(),$userphone.val())
                socket.emit('newUser',{name:$username.val(),address:$useraddress.val(),phone:$userphone.val()},function(data){//to check whether its a valid nickname or not
                    
                    if(data){
                    console.log("here")	
                    }

                $username.val('');
                $useraddress.val('');
                $userphone.val('');
            });
        })

            socket.on('saveUser',function(data){
              console.log("user getting saved",data)
              for(var i=0;i<data.length;i++) {
               $(".data-table tbody").append("<tr #='"+data.id+"' data-name='"+data.name+"' data-address='"+data.address+"' data-address='"+data.address+"'><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
              }
             
            })

})
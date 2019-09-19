
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
             var $content=$('#content');
             var $userList = $('#userList');
             var $editDetails = $('#editDetails');
             var $userNameEdit = $('#userNameEdit')
             var $userAddrEdit = $('#userAddrEdit')
             var $userPhoneEdit = $('#userPhoneEdit')
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
              //  console.log(data[i].name,data)
               $(".data-table tbody").append("<tr data.id='"+data[i].id+"' data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");

              }
            })
            
          $editDetails.submit(function(e){
            e.preventDefault();
            console.log("in edit details");
        if($userNameEdit.val()=='' || $userNameEdit.val()==" "||$userAddrEdit.val()=='' || $userAddrEdit.val()==" "
                    || $userPhoneEdit.val()=='' || $userPhoneEdit.val()==" ")
                {   
                    alert("not allowed");
                    return false;
                }

                console.log("is this getting here too",$userNameEdit.val(),$userAddrEdit.val(),$userPhoneEdit.val())
                socket.emit('editUser',{name:$userNameEdit.val(),address:$userAddrEdit.val(),phone:$userPhoneEdit.val()},function(data){//to check whether its a valid nickname or not
                    
                    if(data){
                    console.log("here") 
                    }

                $userNameEdit.val('');
                $userAddrEdit.val('');
                $userPhoneEdit.val('');
            });
        })

    //    socket.on('removeUser',function(data){
    //     $("body").on("click", ".btn-delete", function(){
    //       console.log(data,"removed data")
    //     $(this).parents("tr").remove();
    // });   
    //    })
})
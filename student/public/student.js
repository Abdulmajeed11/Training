
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $userid= $('#userid');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
             var $userList = $('#userList');
             var $userEditId = $('#editDetails');
             var $editDetails = $('#editDetails');
             var $userNameEdit = $('#userNameEdit')
             var $userAddrEdit = $('#userAddrEdit')
             var $userPhoneEdit = $('#userPhoneEdit')

          // console.log("window.location.href : " + window.location.href);
             $saveuser.submit(function(e){ 
                e.preventDefault();
                console.log("here-----")
                if($username.val()=='' || $username.val()==" "||$useraddress.val()=='' || $useraddress.val()==" "
                    || $userphone.val()=='' || $userphone.val()==" ")
                {   
       
                    alert("not allowed");
                    return false;
                }

                console.log("is this getting here",$('#userid').val(),$username.val(),$useraddress.val(),$userphone.val())
                socket.emit('newUser',{id:$('#userid').val(),name:$username.val(),address:$useraddress.val(),phone:$userphone.val()},function(data){
                    
                    if(data){
                    console.log("here",data) 
                    }

                $username.val('');
                $useraddress.val('');
                $userphone.val('');
            })
        })

              socket.on('saveUser',function(data){
               console.log("user getting saved",data) 
              for(var i=0;i<data.length;i++) {       
               $(".data-table tbody").append("<tr><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");       
          //   console.log(window.location.pathname,"update/"+data[i].id)          
              }  
            })


   $("body").on("click", ".btn-edit", function(){
     console.log("is it coming here")
     console.log(window.location.pathname)
    });


          $editDetails.submit(function(e){
            e.preventDefault();
            console.log("in edit details");
            console.log(window.location.pathname,"update")

          if($userNameEdit.val()=='' || $userNameEdit.val()==" "||$userAddrEdit.val()=='' || $userAddrEdit.val()==" "
                    || $userPhoneEdit.val()=='' || $userPhoneEdit.val()==" ")
                {   
                    alert("not allowed");
                    return false;
                }

                console.log("is this getting here too",$('#userEditId').val(),$userNameEdit.val(),$userAddrEdit.val(),$userPhoneEdit.val())
                socket.emit('editUser',{id:$('#userEditId').val(),name:$userNameEdit.val(),address:$userAddrEdit.val(),phone:$userPhoneEdit.val()},function(data){        
                if(data){
                console.log("here") 
                 }name
                $userNameEdit.val('');
                $userAddrEdit.val('');
                $userPhoneEdit.val('');
            });
        })

        socket.on('editedUser',function(data){
         console.log("edited user values")
        $(".data-table tbody").append("<tr><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><a href='/update/"+data.id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data.id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");        
          })
         
      $(window).on('load', function(){   
      socket.emit('oldUser',{id:$('#userEditId').val(),name:$username.val(),address:$useraddress.val(),phone:$userphone.val()})   
      })   

     socket.on("oldUserDisplay",function(data){
     for(var i=0;i<data.length;i++) {       
      $(".data-table tbody").append("<tr><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");
     }
     })

     $("body").on("click", ".btn-delete", function(){
     console.log("is this getting here",$('#userid').val(),$username.val(),$useraddress.val(),$userphone.val())  
     socket.emit('deleteUser',{id:$('#userid').val(),name:$username.val(),address:$useraddress.val(),phone:$userphone.val()})
     $(this).parents("tr").remove();
       })
})

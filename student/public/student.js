
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $userid= $('#userid');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
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
                console.log("is this getting here",$userid.val(),$username.val(),$useraddress.val(),$userphone.val())
                socket.emit('newUser',{name:$username.val(),address:$useraddress.val(),phone:$userphone.val()},function(data){//to check whether its a valid nickname or not
                    
                    if(data){
                    console.log("here",data) 
                    }
                $username.val('');
                $useraddress.val('');
                $userphone.val('');
            });
       // $(".data-table tbody").append("<tr data-name='"+$username.val()+"' data-address='"+$useraddress.val()+"' data-phone='"+$userphone.val()+"'><td>"+$username.val()+"</td><td>"+$useraddress.val()+"</td><td>"+$userphone.val()+"</td><td><a href='/update/' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");     
        })


            socket.on('saveUser',function(data){
              console.log("user getting saved",data)
              for(var i=0;i<data.length;i++) {
       
               $(".data-table tbody").append("<tr data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");
             //   $(".data-table tbody").append("<tr data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
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
        //$(".data-table tbody").append("<tr data-name='"+$userNameEdit.val()+"' data-Address='"+$userAddrEdit.val()+"' data-phone='"+$userPhoneEdit.val()+"'><td>"+$userNameEdit.val()+"</td><td>"+$userAddrEdit.val()+"</td><td>"+$userPhoneEdit.val()+"</td><td><a href='indexEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
        })
        
         socket.on('editedUser',function(data){
         console.log("edited user values")
        $(".data-table tbody").append("<tr data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");      
        // $(".data-table tbody").append("<tr data-name='"+data.name+"' data-Address='"+data.address+"' data-phone='"+data.phone+"'><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
          })


        $("body").on("click", ".btn-delete", function(){
         console.log("is this getting here",$username.val(),$useraddress.val(),$userphone.val())  
        socket.emit('deleteUser',{name:$username.val(),address:$useraddress.val(),phone:$userphone.val()})
        $(this).parents("tr").remove();
       })
})
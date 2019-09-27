
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $userid = $('#userid');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
             var $userList = $('#userList');
             var $editDetails = $('#editDetails');
             var $userIdEdit = $('#userIdEdit');
             var $userNameEdit = $('#userNameEdit')
             var $userAddrEdit = $('#userAddrEdit')
             var $userPhoneEdit = $('#userPhoneEdit')
               $saveuser.submit(function(e){
                e.preventDefault();
                console.log("here-----")
                if($userid.val()=='' || $userid.val()==" "||$username.val()=='' || $username.val()==" "||$useraddress.val()=='' || $useraddress.val()==" "
                    || $userphone.val()=='' || $userphone.val()==" ")
                {   
       
                    alert("not allowed");
                    return false;
                }
                console.log("is this getting here",$userid.val(),$username.val(),$useraddress.val(),$userphone.val())
                socket.emit('newUser',{id:$userid.val(),name:$username.val(),address:$useraddress.val(),phone:$userphone.val()},function(data){//to check whether its a valid nickname or not
                    
                    if(data){
                    console.log("here") 
                    }
                $userid.val('');
                $username.val('');
                $useraddress.val('');
                $userphone.val('');
            });
        $(".data-table tbody").append("<tr data-name='"+$username.val()+"' data-address='"+$useraddress.val()+"' data-phone='"+$userphone.val()+"'><td>"+$username.val()+"</td><td>"+$useraddress.val()+"</td><td>"+$userphone.val()+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
                
        })

            // socket.on('saveUser',function(data){
            //   console.log("user getting saved",data)

            //   for(var i=0;i<data.length;i++) {
            //   // $(".data-table tbody").append("<tr data.id='"+data[i].id+"' data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><a href='/delete/"+data[i].id+"' class='btn btn-danger btn-xs btn-delete'>Delete</a></td></tr>");
            //     $(".data-table tbody").append("<tr data-name='"+data[i].name+"' data-Address='"+data[i].address+"' data-phone='"+data[i].phone+"'><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
            //   }
            // })
            
        //   $editDetails.submit(function(e){
        //     e.preventDefault();
        //     console.log("in edit details");
        // if($userIdEdit.val()=='' || $userIdEdit.val()==" "||$userNameEdit.val()=='' || $userNameEdit.val()==" "||$userAddrEdit.val()=='' || $userAddrEdit.val()==" "
        //             || $userPhoneEdit.val()=='' || $userPhoneEdit.val()==" ")
        //         {   
        //             alert("not allowed");
        //             return false;
        //         }

        //         console.log("is this getting here too",$userIdEdit.val(),$userNameEdit.val(),$userAddrEdit.val(),$userPhoneEdit.val())
        //         socket.emit('editUser',{id:$userIdEdit.val(),name:$userNameEdit.val(),address:$userAddrEdit.val(),phone:$userPhoneEdit.val()},function(data){//to check whether its a valid nickname or not
                    
        //         if(data){
        //         console.log("here") 
        //          }
        //         $userIdEdit.val('');
        //         $userNameEdit.val('');
        //         $userAddrEdit.val('');
        //         $userPhoneEdit.val('');
        //     });
        // $(".data-table tbody").append("<tr data-name='"+$userNameEdit.val()+"' data-Address='"+$userAddrEdit.val()+"' data-phone='"+$userPhoneEdit.val()+"'><td>"+$userNameEdit.val()+"</td><td>"+$userAddrEdit.val()+"</td><td>"+$userPhoneEdit.val()+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
        // })
        

        socket.on('editedUser',function(data){
        console.log("edited user values")
         $(".data-table tbody").append("<tr data-name='"+data.name+"' data-address='"+data.address+"' data-phone='"+data.phone+"'><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
          })

        $("body").on("click", ".btn-delete", function(){
         console.log("is this getting here",$userid.val(),$username.val(),$useraddress.val(),$userphone.val())  
        socket.emit('deleteUser',{id:$userid.val(),name:$username.val(),address:$useraddress.val(),phone:$userphone.val()})
        $(this).parents("tr").remove();
       })

        $("body").on("click", ".btn-edit", function(){
        var name = $(this).parents("tr").attr('data-name');
        var email = $(this).parents("tr").attr('data-address');
        var phone = $(this).parents("tr").attr('data-phone');

        console.log(name,email,phone,"values1")

        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');
         $(this).parents("tr").find("td:eq(2)").html('<input name="edit_phone" value="'+phone+'">');

        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });


        $("body").on("click",".btn-update", function(){
        var name = $(this).parents("tr").find("input[name='edit_name']").val();
        var email = $(this).parents("tr").find("input[name='edit_email']").val();
        var phone = $(this).parents("tr").find("input[name='edit_phone']").val();
        console.log(name,email,phone,"values2")
    
        socket.emit('editUser',{id:$userid.val(),name:name,address:email,phone:phone})
        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(email);
        $(this).parents("tr").find("td:eq(2)").text(phone);

        $(this).parents("tr").attr('data-name', name);
        $(this).parents("tr").attr('data-email', email);
        $(this).parents("tr").attr('data-email', phone);

    
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });

        $("body").on("click", ".btn-cancel", function(){
        var name = $(this).parents("tr").attr('data-name');
        var email = $(this).parents("tr").attr('data-email');
        var phone = $(this).parents("tr").attr('data-phone');
        console.log(name,email,phone,"values3")
    
        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(email);
        $(this).parents("tr").find("td:eq(2)").text(phone);
   
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

   
//         $(window).bind('beforeunload', function(){
//           console.log("its coming here")
// });

         // socket.on('oldUsers',function(data){
        //   console.log(data,"old user data");
        //   $(".data-table tbody").append("<tr data.id='"+data.id+"' data-name='"+data.name+"' data-Address='"+data.address+"' data-phone='"+data.phone+"'><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><a href='tempEdit.html' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
        // })


})
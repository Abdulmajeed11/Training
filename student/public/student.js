
 $(function(){
            var socket=io.connect();
             var $saveuser=$('#saveuser');
             var $userid = $('#userid');
             var $username=$('#username')
             var $useraddress=$('#useraddress')
             var $userphone=$('#userphone')
             var $userList = $('#userList');
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
})
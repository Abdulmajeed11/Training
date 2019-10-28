
 $(function(){
    var socket=io.connect();
    var $saveuser=$('#saveuser');
    var $username=$('#username')
    var $useraddress=$('#useraddress')
    var $userphone=$('#userphone')
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
     socket.emit('newUser',{name:$username.val(),address:$useraddress.val(),phone:$userphone.val()},function(data){ 
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
        $(".data-table tbody").append("<tr><td>"+data[i].name+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='/update/"+data[i].id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");              
        $(".btn-delete").on("click",function(){
              console.log(data,"this the the data when delete is clicked")
              socket.emit("deleteUser",{data:data})
              $(this).closest('tr').remove();
            })
        } 
    })

     $editDetails.submit(function(e){
     e.preventDefault();
     console.log("in edit details",window.location.href);
     s = window.location.href;
     var final = s.substr(s.lastIndexOf('/') + 1); 

        if($userNameEdit.val()=='' || $userNameEdit.val()==" "||$userAddrEdit.val()=='' || $userAddrEdit.val()==" "
                    || $userPhoneEdit.val()=='' || $userPhoneEdit.val()==" ")
            {   
             alert("not allowed");
             return false;
            }

        console.log("is this getting here too",final,$userNameEdit.val(),$userAddrEdit.val(),$userPhoneEdit.val())
        socket.emit('editUser',{id:final,name:$userNameEdit.val(),address:$userAddrEdit.val(),phone:$userPhoneEdit.val()},function(data){        
            if(data){
            console.log("here") 
            }
            $userNameEdit.val('');
            $userAddrEdit.val('');
            $userPhoneEdit.val('');
         });
      })

        socket.on('editedUser',function(data){
        console.log("edited user values",window.location.href)
        $(".data-table tbody").append("<tr><td>"+data.name+"</td><td>"+data.address+"</td><td>"+data.phone+"</td><td><a href='/update/"+data.id+"' class='btn btn-info btn-xs btn-edit'>Edit</a><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");        
        $(".btn-delete").on("click",function(){
            console.log(data,"this the the data when delete is clicked")
            socket.emit("deleteUser",{data:data})
            $(this).closest('tr').remove();
        })
     })
         
    socket.on('del',function(data){
    console.log(data,"comeback delete data")
    })
           
     window.delData2 = function(data){
     console.log(data,"this is the deleted data")
     socket.emit("deleteUser2",{id:data})
      }      
      
    socket.on('del2',function(data){
    $('.data-table tr:last').remove();
     })

    $(window).on('load', function(e){
    e.preventDefault();   
    socket.emit('oldUser',{name:$username.val(),address:$useraddress.val(),phone:$userphone.val()})   
    })   
  
    window.homePage = function() {
    window.location = 'http://localhost:3000/';
    }

    socket.on("oldUserDisplay",function(data){
        for(var i=0;i<data.length;i++) {          
        $(".data-table tbody").append('<tr><td>'+data[i].name+'</td><td>'+data[i].address+'</td><td>'+data[i].phone+'</td><td><a href="/update/'+data[i].id+'" class="btn btn-info btn-xs btn-edit">Edit</a><button onclick="delData2('+data[i].id+')" class="btn btn-danger btn-xs btn-delete">Delete</button></td></tr>');                  
       }
    })
})
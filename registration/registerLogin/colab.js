var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
// var connection = require('./../config');
var connection = require('./config');
/*module.exports.register=function(req,res){
    var today = new Date();
 // var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
      //  "password":encryptedString,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        console.log('is it coming here')
        res.json({
            status:false,
            message:'there are some error with query for registration'
        })
      }else{
        console.log('is it coming here in else')
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}


module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
        console.log('is it coming here')
          res.json({
            status:false,
            message:'there are some error with query for authentication'
            })
      }else{
       
        if(results.length >0){
 // decryptedString = cryptr.decrypt(results[0].password);
          //  if(password==decryptedString){
            if(password){
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
 */

 module.exports.register=function(callback){
    var today = new Date();
 // var encryptedString = cryptr.encrypt(req.body.password);
    function(req,res){
    var users={
        "name":req.body.name,
        "email":req.body.email,
      //  "password":encryptedString,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }  return connection.query('INSERT INTO users SET ?',users, callback) 
}
}

module.exports.authenticate=function(callback){
    var email=req.body.email;
    var password=req.body.password;
   
 return connection.query('SELECT * FROM users WHERE email = ?',[email],callback )

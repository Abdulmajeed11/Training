var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();

//original code
// var authenticateController=require('./controllers/authenticate-controller');
// var registerController=require('./controllers/register-controller');

//colab code
// var authenticateController=require('./controllers/colab');
// var registerController=require('./controllers/colab');

 
// var controller = require('./colab');



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
/* route to handle login and registration */

/*
// original code

// app.post('/api/register',registerController.register);
// app.post('/api/authenticate',authenticateController.authenticate);
 */

// app.post('/api/register',register);
// app.post('/api/authenticate',authenticate);

// console.log(authenticateController);


// app.post('/controllers/register-controller', registerController.register);
// app.post('/controllers/authenticate-controller', authenticateController.authenticate);


// below 2 lines are  for registration and authentication colab in colab.js file

// app.post('/colab', controller.register);
// app.post('/colaboration', controller.authenticate);


//Trying to send response from index.js not the colab files
/*
app.post('/colab',function(req,res){
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
        console.log('iscolab it coming here in else')
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
});


app.post('/colaboration', function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
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
);
*/


// app.post('/colab',connection.register)
// app.post('/colaboration',connection.authenticate)


// Having database operations in config.js file and sending response from this file

app.post('/colab',function(req,res){
    var name = req.body.name;
      var email=req.body.email;
      var password=req.body.password;
   console.log('is it coming here in colab')
  //connection.register(req,res,function(error, results, fields){
    connection.register(name,email,password,function(error, results, fields){
console.log('is it inside thhe query')
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
    })
})

app.post('/colaboration',function(req,res){
      var email=req.body.email;
    var password=req.body.password;
  //connection.authenticate(req,res,function(error,results,fields) {
  connection.authenticate(email,password,function (error, results, fields) {
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
            if(req.body.password){
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
})


app.listen(4000);

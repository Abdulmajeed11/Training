var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 

// Having database operations in config.js file and sending response from this file
app.post('/colab',function(req,res){
      var name = req.body.name;
      var email=req.body.email;
      var password=req.body.password;
      console.log('is it coming here in colab')
      connection.register(name,email,password,function(error, results, fields){
      console.log('is it inside the query')
      if (error) {
        console.log('is it coming here')
        res.json({
            status:false,
            message:'there are some error with query for registration'
         })
      } else{
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

  connection.authenticate(email,password,function (error, results, fields) {
      if (error) {
        console.log('is it coming here')
          res.json({
            status:false,
            message:'there are some error with query for authentication'
            })
      }else{
       
        if(results.length >0){
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

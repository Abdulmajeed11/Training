const controller = {};
var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "0000" ,
  database : "nodejs2" 
});  
connection.connect(function(err,res) {  
 if(err){
  console.log("Connection Error")
 }
 else{
  console.log("Connected");  
}
});  

        controller.list = (data,callback) => {
        connection.query('SELECT * FROM student', (err, customers) => {
            if (err) {
             return callback(err,null)
            }
           else{
            return callback(null,customers)
           }
       });
    };

       controller.save = (data, callback) => {
        var user={
        "id":data.id,
        "name":data.name,
        "address":data.address,
        "phone":data.phone,
      }    
      console.log(data,"save data")
        const query = connection.query('INSERT INTO student set ?', user, (err, customer) => {
              if(err)
              {
              return callback(err,null)
            }
              else
             {
             console.log(customer,"---insert data---");
             return callback(null,customer);
              }      
        })
};

     controller.update = (data, callback) => {
      console.log(data,"updating data")
      const newCustomer = {
        "name":data.name,
        "address":data.address,
        "phone":data.phone,
      }
      ;
     connection.query('UPDATE student set ?', [newCustomer], (err, rows) => {
       // res.redirect('/');
            if(err)
            {
              return callback(err,null)
            }
              else
             {
             console.log(rows,"---update data---");
             return callback(null,rows);
              } 

    });
};

      controller.delete = (req, res) => {
      const {id} = req.params;
      console.log(id,"id")
      connection.query('DELETE FROM student WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
};

module.exports = controller;
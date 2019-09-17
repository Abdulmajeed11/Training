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
        "name":data.name,
        "address":data.address,
        "phone":data.phone,
      }    
      console.log(data)
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

        controller.edit = (req, res) => {
      //  console.log("is it coming in edit",req.params)
        const {id} = req.params;
        connection.query("SELECT * FROM student WHERE id = ?", [id], (err, rows) => {
        res.redirect('/tempEdit.html');
    });
};

    controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;
    connection.query('UPDATE student set ? where id = ?', [newCustomer, id], (err, rows) => {
       res.redirect('/');
    });
};

      controller.delete = (req, res) => {
     // console.log(req.params,"delete params")
      const {id} = req.params;
      console.log(id,"id")
      connection.query('DELETE FROM student WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
};

module.exports = controller;

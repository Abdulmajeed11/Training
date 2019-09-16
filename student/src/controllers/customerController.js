const controller = {};
var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "0000" ,
  database : "nodejs2" 
});  
connection.connect(function(err,res) {  
/*  if (err) throw err;  */
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
            //    res.json(err);
             return callback(err,null)
            }
            // res.render('customers', {
            //     data: customers
           // });
           else{
            return callback(null,customers)
           }
    });
};

controller.save = (data, callback) => {
    // const data = req.body;

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
         //   res.redirect('/');
        })
};

controller.edit = (req, res) => {
  //controller.edit = (data,callback) => {

    const {id} = req.params;
        connection.query("SELECT * FROM student WHERE id = ?", [id], (err, rows) => {
            res.render('customers_edit', {
                data: rows[0]
        });
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
//  controller.delete = (data,callback) => {
 //   console.log(data,"-----")
    const {id} = req.params;
        connection.query('DELETE FROM student WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
    });
};

module.exports = controller;

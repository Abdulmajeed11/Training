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
 } else{
  console.log("Connected");  
  }
});  

      controller.list = (data,callback) => {
      connection.query('SELECT * FROM student ', (err, rows) => {
            if (err) {
              return callback(err,null)
            } else{
              return callback(null,rows)
           }
      });
  };
 
       controller.saveList = (data,callback) => {
       connection.query('SELECT * FROM student ORDER BY id DESC limit 1 ', (err, rows) => {
            if (err) {
              return callback(err,null)
            } else {
              return callback(null,rows)
           }
       });
    };

      controller.save = (data, callback) => {
        var user = {
        "id":data.id,
        "name":data.name,
        "address":data.address,
        "phone":data.phone,
      }    
      console.log(data,"save data")
      const query = connection.query('INSERT INTO student set ?', user, (err, rows) => {
              if(err){
              return callback(err,null)
            } else {
              console.log(rows,"---insert data---");
              return callback(null,rows);
         }      
     })
};

       controller.update = (data, callback) => {
       console.log(data,"updating data") 
       const id = data.id  
       const newStudent = {
         "name":data.name,
         "address":data.address,
         "phone":data.phone,
       };
       connection.query('UPDATE student set ? where id = ?', [newStudent,id], (err, rows) => {
            if(err){
              return callback(err,null)
            } else{
              console.log(rows,"---update data---");
              return callback(null,rows);
          } 
    });
};

      controller.delete = (data,callback) => {
      const id = data.id;
      console.log(id,"id")
      connection.query('DELETE FROM student WHERE id = ?', [id], (err, rows) => {
          if(err){
           return callback(err,null)
         } else {
           console.log(rows,"deleted data")
           return callback(null,rows)
        }
    });
};

module.exports = controller;

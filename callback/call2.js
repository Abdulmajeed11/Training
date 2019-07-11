// callback examples using database

//Example 1 : Creating the database query and calling the function using callbacks

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
function getData(callback)
{
    con.query("CREATE DATABASE mydb3", function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result);

    });

}
/*
//call Fn for db query with callback
getData(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    

});

// The query will be successful and we willl get the Data 
// O/p: Connected!
//    result from db is :  OkPacket {
//    fieldCount: 0,
//    affectedRows: 1,
//    insertId: 0,
//    serverStatus: 2,
//    warningCount: 0,
//    message: '',
//    protocol41: true,
//    changedRows: 0 }


//Example 2: Creating table in a database and calling the function using callback 
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database : "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
function getData(callback)
{
	 var sql = "CREATE TABLE customer (name VARCHAR(255), country VARCHAR(255))";
    con.query(sql, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result);

    });

}

//call Fn for db query with callback
getData(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    

});

// O/p :Connected!
//      result from db is :  OkPacket {
//      fieldCount: 0,
//      affectedRows: 0,
//      insertId: 0,
//      serverStatus: 2,
//      warningCount: 0,
//      message: '',
//      protocol41: true,
//      changedRows: 0 }


// Example 3 : Insert into the table values
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database : "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
function getData(callback)
{
	 var sql = "INSERT INTO customer (name, country) VALUES ('sonu', 'india')";
    con.query(sql, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result);

    });

}

//call Fn for db query with callback
getData(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    

});

// O/p :  Connected!
//        result from db is :  OkPacket {
//        fieldCount: 0,
//        affectedRows: 1,
//        insertId: 0,
//        serverStatus: 2,
//        warningCount: 0,
//        message: '',
//        protocol41: true,
//        changedRows: 0 }

//Example 4 : selecting values from the table and calling those values using callbacks

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database : "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
function getData(callback)
{
	 var sql = "SELECT * from customer";
    con.query(sql, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result);

    });

}

//call Fn for db query with callback
getData(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    

});

// O/p :  result from db is :  [ RowDataPacket { name: 'abdul', country: 'india' },
//        RowDataPacket { name: 'sonu', country: 'india' } ]
*/
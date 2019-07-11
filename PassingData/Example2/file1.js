// Exporting a variable value and changing its value in a different file
module.exports ={
   a : 10,
   temp : function(x){
    a = x;
    return a;
  }
}


// example 1a:  (with variable)

// this example is to demonstrate about the passing the data from one file to another which changes
// made to the data 

exports.myObj = {
      a: 30,                                
     setA : function(a){
     this.data = a;
   return this.data
},
     getA : function(){
     console.log(this.data,'5');    //to check if the data is coming here
     return this.a; 
}  
}

// Note : this keyword here is refering to the object hence we can use it in the entire object as seen above

// example 1b:  (with variable)

exports.myObj = {                        
    data: 10,
    set: function (value) {
        this.data = value;
    },
    get: function () {
        return this.data;
    }
}

// Example 2: (with strings)
exports.myObj = {
      str: 'hello',                                
     setA : function(a){
     this.data = a;
   return this.data
},
     getA : function(){
  //   console.log(this.data,'5');    //to check if the data is coming here
     return this.str; 
}  
}

//Example 3: with objects
exports.myObj = {
      name: {firstName:'Abdul',lastName:'Majeed'},                                
     setA : function(a){
     this.data = a;
   return this.data
},
     getA : function(){
  //   console.log(this.data,'5');    //to check if the data is coming here
     return this.name; 
}  
}

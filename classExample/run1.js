var File = require('./tempDelFile.js')
console.log(File.modifyA(10))        // o/p: 10 
console.log(File.getA())             // o/p: 10
var fileObj = new File()
console.log(fileObj.modifyA(20))    // o/p:  File is not a constructor
console.log(fileObj.getA())
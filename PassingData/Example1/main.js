var counter = require('./counter.js');
console.log(counter.Counter.count)
counter.Counter.add();
// counter.Counter.remove();
console.log(counter.Counter.count);

// O/p: 1
//      10       

// note: Its 1, -9 if we execute the remove function and comment out the add function
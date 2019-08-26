var msg = process.argv.slice(2).join(' ') || "Hello World!";
var secs = msg.toString().split('.').length - 1;
console.log(secs);
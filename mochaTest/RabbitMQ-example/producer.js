
var q = 'tasks';

var open = require('amqplib').connect('amqp://localhost');
var a = ['1','2','3','4','5']
// var a = [{abdul:'majeed'},{paul:'allen'},{james:'carter'}]
let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];

// console.log(products[1]);

// Publisher
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    return ch.sendToQueue(q, Buffer.from(a[0]));
  });
}).catch(console.warn);
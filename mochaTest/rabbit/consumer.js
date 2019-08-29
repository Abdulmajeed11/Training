var options = {
    host: 'amqp://localhost',
    queueName: 'hellooo',
}
var Consumer={};
var consumer={};
consumer.response=0

//Added stuff
var EventEmitter = require('events').EventEmitter;
consumer.events = new EventEmitter();

var RabbitMQConnector = require('./rabbitMQ.js');
for (var i =0;i<1;i++){
Consumer[i] = new RabbitMQConnector(options, 'CONSUMER');
Consumer[i].on('connected', function() {
    console.log('RabbitMQConnector connected For Consumer')

});


Consumer[i].on('message', function(msg) {
 console.log('msg* command*** c1' ,msg);
consumer.events.emit('message',msg)
});
}

module.exports=consumer
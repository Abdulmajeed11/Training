// Worker for handeling the tasks , (note: we can multiple wokrers for distributive processing) 

//#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'task_queue';

    channel.assertQueue(queue, {            // tells to save the message even if rabbitMQ server is down
      durable: true
    });
    channel.prefetch(3);      //  tells RabbitMQ not to give more than one message to a worker at a time
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {           //consuming the message here
      var secs = msg.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg.content.toString());
      setTimeout(function() {
        console.log(" [x] Done");
        channel.ack(msg);
      }, secs * 1000);
    }, {
      // manual acknowledgment mode,
      // see https://www.rabbitmq.com/confirms.html for details
      noAck: false               //if a worker is down we dont want to lose the message sent to it
    }); 


      channel.consume(queue, function(msg2) {           
      var secs = msg2.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg2.content.toString());
      setTimeout(function() {
        console.log(" [x] Done");
        channel.ack(msg2);
      }, secs * 1000);
    }, {
      noAck: false               
    }); 




      channel.consume(queue, function(msg3) {           //consuming the message here
      var secs = msg3.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg3.content.toString());
      setTimeout(function() {
        console.log(" [x] Done");
        channel.ack(msg3);
      }, secs * 1000);
    }, {
      noAck: false                
    }); 



      channel.consume(queue, function(msg4) {      
      var secs = msg4.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg4.content.toString());
      setTimeout(function() {
        console.log(" [x] Done");
        channel.ack(msg4);
      }, secs * 1000);
    }, {
      noAck: false              
    }); 


  });
});
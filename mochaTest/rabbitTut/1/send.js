#!/usr/bin/env node
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'helloo';
        var msg = 'Hello World!';
        var msg2 = [{abdul:"majeed"},{peter:"jones"}]

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));
       channel.sendToQueue(queue, Buffer.from(msg2[0].abdul));
       channel.sendToQueue(queue, Buffer.from(msg2[1].peter));
       

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
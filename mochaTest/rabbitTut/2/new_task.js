//work queue for distributing the task among multiple workers


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
        var msg = process.argv.slice(2).join(' ') || "Hello World!";
        var msg2 = "Hello Worlddd"
        var msg3 = " whats up"
        var msg4 = "heya"

        channel.assertQueue(queue, {
            durable: true
        });
        channel.sendToQueue(queue, Buffer.from(msg), {
            persistent: true
        });
        console.log(" [x] Sent '%s'", msg);

        channel.sendToQueue(queue, Buffer.from(msg2), {
        persistent: true                        
        }); 
        console.log(" [x] Sent '%s'", msg2);

        channel.sendToQueue(queue, Buffer.from(msg3), {
        persistent: true                         
        }); 
        console.log(" [x] Sent '%s'", msg3);

        channel.sendToQueue(queue, Buffer.from(msg4), {
        persistent: true                        
        }); 
        console.log(" [x] Sent '%s'", msg4);

    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
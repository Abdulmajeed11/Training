var amqp = require("amqplib/callback_api");
var EventEmitter = require("events").EventEmitter;
var util = require("util");
util.inherits(RabbitMQConnector, EventEmitter);

function RabbitMQConnector(options,type) {
    this.host = options.host;
    this.queue = options.queueName;
    this.type = type;
    EventEmitter.call(this);
    connect(this);
    this.amqpConn = null;
    this.pubChannel = null;
    this.offlinePubQueue = [];
    // if the connection is closed or fails to be established at all, we will reconnect

    function connect(thisObj) {
        console.log("-------1-------")
       var self = thisObj;
        amqp.connect(
            self.host + "?heartbeat=60",
            function(err, conn) {
                console.log("-----------2-----------")
                if (err) {
                    return setTimeout(function() {
                        connect(self);
                    }, 2000);
                }
                conn.on("error", function(err) {
                    if (err.message !== "Connection closing") {
                        console.error("[AMQP] conn error", err.message);
                    }
                });
                conn.on("close", function() {
                    console.error("[AMQP] reconnecting");
                    return setTimeout(function() {
                        connect(self);
                    }, 2000);
                });
                console.log("[AMQP] connected");
                self.amqpConn = conn;
                whenConnected(self);
                self.emit("connected");
            }
        );
    }
}

function whenConnected(self) {
    if (self.type == "PRODUCER") startPublisher(self);
    else startWorker(self);
}

function startPublisher(self) {
    console.log(" start publisher");
    self.amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(self, err)) return;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error - 1", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed - 1");
        });

        self.pubChannel = ch;
    });
}

RabbitMQConnector.prototype.pushMessage = function(queue, content) {     //When values are from the producer
    var self = this;
    try {
        this.pubChannel.publish(
            "",
            queue,
            new Buffer.from(content),
            {
                persistent: true
            },
            function(err, ok) {
                if (err) {
                    console.error("[AMQP] publish - 1", err);
                    self.pubChannel.connection.close();
                }
            }
        );
    } catch (e) {
        console.error("[AMQP] publish - 2", e.message);        // when wrong content is sent like number of an object 
    }
};

// A worker that acks messages only if processed succesfully
function startWorker(self) {
    self.amqpConn.createChannel(function(err, ch) {
        if (closeOnErr(self, err)) return;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error - 2", err.message);
        });

        ch.on("close", function() {
            console.log("[AMQP] channel closed - 2");
        });

        ch.prefetch(10);
        ch.assertQueue(
            self.queue,
            {
                noAck: false
            },
            function(err, _ok) {
                if (closeOnErr(self, err)) return;
                ch.consume(self.queue, processMsg, {
                    noAck: false
                });
            }
        );

        function processMsg(msg) {
            ch.ack(msg);
            self.emit("message", msg.content.toString());
        }
    });
}

function closeOnErr(self, err) {
    if (!err) return false;
    console.error("[AMQP] error", err);
    self.amqpConn.close();
    return true;
}

module.exports = RabbitMQConnector;
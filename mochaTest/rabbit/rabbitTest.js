var assert = require('assert');
var assertFunction;
var consumer = require('./consumer.js');
var emitter = consumer.events;
var options1 = {
    host: "amqp://localhost",
    queueName: "hellooo",
}
var RabbitMQConnector = require('./rabbitMQ');
producer = new RabbitMQConnector(options1, 'PRODUCER');
emitter.on('message', function(data) {
   assertFunction(data)
})

        it('should pass 1', function(done) {
       setTimeout(function() {
       var payload ='hello'
       producer.pushMessage('hellooo',payload);
},1000);
        assertFunction = function(data) {
          console.log(data);
        //   var packet = JSON.parse(data)
          var packet = data;
          assert.equal('hello',packet);
                done()
        }
    }) 

       it('should pass 2 ', function(done) {
       setTimeout(function() {
       var payload ='another string'
       producer.pushMessage('hellooo',payload);
},1000);
        assertFunction = function(data) {
          console.log(data);
          var packet = data;
          assert.equal('another string',packet);
                done()
        }
    }) 


      it('should pass 3', function(done) {
       setTimeout(function() {
 var payload = '{"CommandType":"UpdateScene","AlmondMAC":987654321}'
       producer.pushMessage('hellooo',payload);
},1000);
        assertFunction = function(data) {
          console.log(data);
        //  var packet = JSON.stringify(data);
         // var packet = JSON.parse(data);
          var packet =  data;
          assert.equal('{"CommandType":"UpdateScene","AlmondMAC":987654321}',packet);
                done()
        }
    }) 

      it('should pass 4', function(done) {
       setTimeout(function() {
 var payload = '{CommandType:"Add Rule",AlmondMAC:12345}'
       producer.pushMessage('hellooo',payload);
},1000);
        assertFunction = function(data) {
          console.log(data,"this is the data",typeof data);
        var packet = data;
           assert.equal('{CommandType:"Add Rule",AlmondMAC:12345}',packet);
                done()
        }
    }) 
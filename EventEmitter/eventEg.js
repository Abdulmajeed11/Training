// Important points:
// ->Much of the Node.js core API is built around an idiomatic asynchronous event-driven 
// architecture in which certain kinds of objects (called "emitters") emit named events that 
// cause Function objects ("listeners") to be called.
// ->eventEmitter.emit() method is used to trigger the event

const EventEmitter = require('events');


//Example 1: 
const myEmitter = new EventEmitter(); 
myEmitter.on('event', function(){
  console.log('an event occurred!');
});
myEmitter.emit('event');

//O/p: an event occured

//Example 2:
const myEmitter = new EventEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this);

});
myEmitter.emit('event', 'a', 'b');

// O/p: a b EventEmitter {
//     _events: [Object: null prototype] { event: [Function] },
//     _eventsCount: 1,
//     _maxListeners: undefined } 

// Example 3: 
//When a listener is registered using the eventEmitter.on() method, 
//that listener will be invoked every time the named event is emitted.

const myEmitter = new EventEmitter();
let m = 0;
myEmitter.on('event', function(){
  console.log(++m);
});
myEmitter.emit('event');
myEmitter.emit('event');

//O/p: 1,2

//Example 4:   eventEmitter.once() method
// Using the eventEmitter.once() method, it is possible to register a listener that is called at 
// most once for a particular event. Once the event is emitted, the listener is unregistered and 
// then called.


const myEmitter = new EventEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');  //Prints
myEmitter.emit('event');   // Ignored

//O/p: 1

// Example 5 : Error handelling
const myEmitter = new EventEmitter();
myEmitter.on('error', function(err){
  console.log('whoops! there was an error');
});
myEmitter.emit('error');

//O/p: whoops! there was an error

// Example 6: 

const myEmitter = new EventEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', function(){         //--> I
      console.log('B');
    });
  }
});
myEmitter.on('event', function(){
  console.log('A');
});
myEmitter.emit('event');

//O/p : B,A 

// Note: If we try to change the 'I' line event value To listener instead of event, then the ouptut value 
// changes to 'A'

// Example 6a: Event emitter listener count

const myEmitter = new EventEmitter();
myEmitter.on('event', function(){console.log("hello")});
myEmitter.on('event', function(){console.log('world')});
myEmitter.emit('event')
console.log(EventEmitter.listenerCount(myEmitter, 'event'));

// O/p : hello, world, 2

//Example 6b: Event emitter listener count with different values 

const myEmitter = new EventEmitter();
myEmitter.on('event1', function(){console.log("hello")});
myEmitter.on('event2', function(){console.log('world')});
myEmitter.emit('event1')
console.log(EventEmitter.listenerCount(myEmitter, 'event1'));

// O/p: hello , 1

// Example 7:

var myEmitter = new EventEmitter();
myEmitter .on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
myEmitter .emit('FirstEvent', 'Node.js');

// Example 8: 
var myEmitter = new EventEmitter();

//Subscribe FirstEvent
myEmitter.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent
myEmitter.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});

myEmitter.emit('FirstEvent', 'first Node.js example.');
myEmitter.emit('SecondEvent', 'Second Node.js example.');

// O/p: First subscriber: first Node.js example.
//      First subscriber: Second Node.js example.

//Example 9 : Return EventEmitter from a function

function LoopProcessor(num) {
    var myEmitter = new EventEmitter();
    setTimeout(function () {        
        for (var i = 1; i <= num; i++) {
            myEmitter.emit('BeforeProcess', i);
            console.log('Processing number:' + i); 
            myEmitter.emit('AfterProcess', i);
        }
    } , 2000)  
    return myEmitter;
}
var lp = LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

// O/p :About to start the process for 1
//      Processing number:1
//      Completed processing 1
//      About to start the process for 2
//      Processing number:2
//      Completed processing 2
//      About to start the process for 3
//      Processing number:3
//      Completed processing 3


//Example 10: 

var myEmitter = new EventEmitter();

var listner1 = function listner1() {
   console.log('listner1 executed.');
}

var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
myEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
myEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (myEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
myEmitter.emit('connection');

// Remove the binding of listner1 function
myEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
myEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(myEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

// O/p: 2 Listner(s) listening to connection event
//      listner1 executed.
//      listner2 executed.
//      Listner1 will not listen now.
//      listner2 executed.
//      1 Listner(s) listening to connection event
//      Program Ended.

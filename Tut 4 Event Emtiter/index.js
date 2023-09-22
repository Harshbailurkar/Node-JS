const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
//initilize object
const myEmitter = new MyEmitter();

//add a listerner for log event
//  An event listener is a function that will be executed when a specific event is emitted. To do this, use the .on() or .addListener() method:
// Syntax:
//     myEmitter.on("eventName", (eventData) => {
//       // Your logic here based on the emitted event
//       console.log("Event emitted:", eventData);
//     });

//               or

//  function handleClick() {
//    console.log("Button clicked!");
//  }
//  myEmitter.on("click", handleClick);

myEmitter.on("log", (msg) => logEvents(msg));

//Emitting events:
//myEmitter.emit('eventName', eventData);
//This will execute all the event listeners that are registered for the 'eventName' event and pass the eventData to them.

setTimeout(() => {
  console.log("hello");
  myEmitter.emit("log", "log event emiited!");
}, 2000);

/*
.emit is used to emit events, while .on is used to register event listeners.

# Once-only event listener:
--------------------------
If you want an event listener to be executed only once and then removed automatically, you can use the .once() method:

                    myEmitter.once('eventName', (eventData) => {
                      console.log('Event emitted once:', eventData);
                                                                     });
The listener will be removed after it has been called once.

# Removing event listeners (optional):
--------------------------------------
If you ever need to remove a specific event listener, you can use the .off() or .removeListener() method:

myEmitter.off('eventName', eventListener);
// or
myEmitter.removeListener('eventName', eventListener);

Where eventListener is the function you want to remove. 

*/

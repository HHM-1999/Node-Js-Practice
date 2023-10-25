const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

///Register the event///
myEmitter.on('Ringing' ,(period)=>{
    console.log(`Its Really Ringing ${period}`)
})

//raise the event///
setTimeout(()=>{
    myEmitter.emit('Ringing','Second period ended yeh');
},2000)





////example 2/////
const myEmitter2 = new EventEmitter();
// Only do this once so we don't loop forever
myEmitter2.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter2.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter2.on('event', () => {
  console.log('A');
});
myEmitter2.emit('event');
// Prints:
//   B
//   A
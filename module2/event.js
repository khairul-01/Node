const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {};

const myEmit1 = new MyEmitter();

// creating event listener

myEmit1.on('birthday', ()=>{
    console.log("Happy Birthday")
})
myEmit1.on('birthday', (bike)=>{
    console.log(`I will send you a ${bike} as gift`);
})

// emitting an event
myEmit1.emit('birthday', 'bike');
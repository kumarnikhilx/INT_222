import EventEmitter from 'events';

// EventEmitter ka instance
const emitter = new EventEmitter();

// Listener register karo
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js EventEmitter.`);
});

// Event emit karo (data ke saath)
emitter.emit('greet', 'Nikhil');
emitter.emit('greet', 'Kumar');

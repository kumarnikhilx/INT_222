import EventEmitter from 'events';
const http = require('http');

class Logger extends EventEmitter {}

const logger = new Logger();

// listeners
logger.on('serverStart', (port) => {
  console.log(`✅ Server started on port ${port}`);
});

logger.on('newRequest', (method, url) => {
  console.log(`➡ New request: ${method} ${url}`);
});

logger.on('error', (err) => {
  console.error(`❌ Error occurred: ${err.message}`);
});

// simple http server
const PORT = 5000;

const server = http.createServer((req, res) => {
  // har request pe event emit
  logger.emit('newRequest', req.method, req.url);

  if (req.url === '/error') {
    const err = new Error('Fake error for demo');
    logger.emit('error', err);
    res.statusCode = 500;
    return res.end('Error route triggered.\nCheck console logs.');
  }

  res.statusCode = 200;
  res.end('Hello from server with EventEmitter logger!');
});

// when server starts
server.listen(PORT, () => {
  logger.emit('serverStart', PORT);
});

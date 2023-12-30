const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from app1\n');
});

server.listen(8080, '0.0.0.0', () => {
  console.log('App1 listening on port 8080');
});

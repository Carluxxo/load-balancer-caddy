const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from app2\n');
});

server.listen(8081, '0.0.0.0', () => {
  console.log('App2 listening on port 8081');
});

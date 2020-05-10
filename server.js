let http = require('http');
let server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});
server.listen(1337, '192.168.33.10');
console.log('server listening ...');
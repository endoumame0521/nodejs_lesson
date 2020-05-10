let http = require('http'),
    fs = require('fs');
let settings = require('./settings')
let server = http.createServer();

console.log(settings)

server.on('request', function(req, res) {
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('not found!');
      return res.end();
    }
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
  });
});
server.listen(settings.port, settings.host);
console.log('server listening ...');

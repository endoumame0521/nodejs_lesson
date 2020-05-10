let http = require('http');
let fs = require('fs');
let settings = require('./settings')
let ejs = require('ejs')
let qs = require('querystring')

let server = http.createServer();
let template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
let posts = [];


function renderForm(posts, res) {
  let data = ejs.render(template, {
    posts: posts
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
}

console.log(settings)

server.on('request', function(req, res) {
  if (req.method === 'POST') {
    req.data = '';
    req.on('readable', function() {
      req.data += req.read();
    });
    req.on('end', function() {
      let query = qs.parse(req.data);
      posts.push(query.name);
      renderForm(posts, res);
    });
  } else {
    renderForm(posts, res);
  }
});
server.listen(settings.port, settings.host);
console.log('server listening ...');

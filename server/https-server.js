var fs = require('fs'); 
var https = require('https'); 
var options = { 
    key: fs.readFileSync('ds-server-key.pem'), 
    cert: fs.readFileSync('ds-server-crt.pem'), 
    ca: fs.readFileSync('ds-ca-crt.pem'), 
}; 

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(443,'0.0.0.0');

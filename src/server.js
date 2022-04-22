// let http = require('http');
// let static = require('node-static');
// let file = new static.Server('.');

// // http
// //   .createServer(function (req, res) {
// //     file.serve(req, res);
// //   })
// //   .listen(8080);

// console.log('Server running on port 8080');

var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function () {
  c.get('G/test.txt', function (err, stream) {
    if (err) throw err;
    stream.once('close', function () {
      c.end();
    });
    stream.pipe(fs.createWriteStream('test.local-copy.txt'));
  });
});
// connect to localhost:21 as anonymous
c.connect({ host: '100.82.97.89' });

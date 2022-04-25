// var Client = require('ftp');
// var fs = require('fs');

// var c = new Client();
// c.on('ready', function () {
//   c.get('G/test.txt', function (err, stream) {
//     if (err) throw err;
//     stream.once('close', function () {
//       c.end();
//     });
//     stream.pipe(fs.createWriteStream('test.local-copy.txt'));
//   });
// });

// c.connect({ host: '100.82.97.89' });
let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp
  .connect({
    host: '100.82.97.89',
    port: '21',
    username: 'admin',
    password: 'admin',
  })
  .then(() => {
    return sftp.list('G/');
  })
  .then((data) => {
    console.log(data, 'the data info');
  })
  .catch((err) => {
    console.log(err, 'catch error');
  });

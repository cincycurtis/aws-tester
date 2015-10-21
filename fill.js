const AWS = require('aws-sdk');
const _ = require('underscore');

var s3 = new AWS.S3({
  accessKeyId: 'REDACTED',
  secretAccessKey: 'REDACTED'
});

var bucket = '1445447202775';

var params = {
  Bucket: bucket,
  Key: 0,
  Body: ''
};

for (var i = 0; i < 499; i++) {
  params.Key = i.toString();
  params.Body = Date.now().toString();

  s3.putObject(params, function (err, data) {
    if (err) return console.log(err);
    else console.log(data);
  });
}
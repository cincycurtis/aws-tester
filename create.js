const AWS = require('aws-sdk');
const _ = require('underscore');

var s3 = new AWS.S3({
  accessKeyId: 'REDACTED',
  secretAccessKey: 'REDACTED'
});

var date = Date.now();

s3.createBucket({ Bucket: date.toString() }, function (err, data) {
  if (err) console.log(err)
  else console.log(data);
});

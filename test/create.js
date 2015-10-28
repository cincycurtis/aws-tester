const AWS = require('aws-sdk');
const _ = require('underscore');

var s3 = new AWS.S3(require('./secrets'));

var date = Date.now();

s3.createBucket({ Bucket: process.argv[2] || date.toString() }, function (err, data) {
  console.log('Trying to create bucket ' + process.argv[2] || date.toString());
  if (err) console.log(err);
  else console.log(data);
});

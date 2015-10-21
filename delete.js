const AWS = require('aws-sdk');
const _ = require('underscore');

var s3 = new AWS.S3({
  accessKeyId: 'REDACTED',
  secretAccessKey: 'REDACTED'
});

var bucket = '1445447202775';

var params = {
  Bucket: bucket
};

s3.listObjects(params, function (err, res) {
  var deleteParams;
  var bucketObjectsKeys = [];
  if (err) console.log(err, err.stack);

  console.log(res.Contents);

  res.Contents.forEach(function (elem) {
    bucketObjectsKeys.push(_.pick(elem, 'Key'));
  });

  deleteParams = {
    Bucket: bucket,
    Delete: {
      Objects: bucketObjectsKeys
    }
  };

  console.log(bucketObjectsKeys);
  console.log('deleting objects from: %s', bucket);

  s3.deleteObjects(deleteParams, function (err, data) {
    if (err) return console.log(err);

    console.log('deleting bucket: %s', bucket);
    s3.deleteBucket({'Bucket': bucket}, function (err, data) {
      if (err) console.log(err);
      else console.log('SUCCESS');
    });
  });
});

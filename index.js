const AWS = require('aws-sdk');
const _ = require('underscore');

var s3;

function getKeys (params) {
  if (params.hasOwnProperty('accessKeyId') && params.hasOwnProperty('secretAccessKey')) {
    return {
      'accessKeyId': params.accessKeyId,
      'secretAccessKey': params.secretAccessKey
    };
  } else {
    throw new Error('Please provide access keys');
  }
}

function deleteBucket (params, done) {
  params = { Bucket: params.Bucket };
  if (params.Bucket) {
    s3.listObjects(params, function (err, res) {
      var deleteParams;
      var bucketObjectsKeys = [];
      if (err) done(err, null);

      res.Contents.forEach(function (elem) {
        bucketObjectsKeys.push(_.pick(elem, 'Key'));
      });

      deleteParams = {
        Bucket: params.Bucket,
        Delete: {
          Objects: bucketObjectsKeys
        }
      };

      console.log('deleting objects from: %s', params.Bucket);

      s3.deleteObjects(deleteParams, function (err, data) {
        if (err) return console.log(err);

        console.log('deleting bucket: %s', params.Bucket);
        s3.deleteBucket({'Bucket': params.Bucket}, function (err, data) {
          if (err) console.log(err);
          else console.log('SUCCESS');
        });
      });
    });
  } else {
    done(new Error('S3 delete bucket params not valid'), null);
  }

  done(null, 'Success');
}

module.exports = function (params, done) {
  s3 = new AWS.S3(getKeys(params));

  if (!params.Bucket) {
    done(new Error('"Bucket" not specified in params object'), null);
  } else {
    params = { Bucket: params.Bucket };
  }

  deleteBucket(params, function (err, res) {
    if (err) return done(err, null);

    return done(null,res);
  });
};

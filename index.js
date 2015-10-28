const AWS = require('aws-sdk');
const _ = require('underscore');

const GetCredentials = require('./getCredentials');
const DeleteBucket = require('./deleteBucket');

var s3;

module.exports = function (params, done) {
  s3 = new AWS.S3(GetCredentials(params));

  if (!params.Bucket) {
    done(new Error('"Bucket" not specified in params object'), null);
  } else {
    params = { Bucket: params.Bucket };
  }

  DeleteBucket(params, s3, function (err, res) {
    if (err) return done(err, null);

    return done(null,res);
  });
};

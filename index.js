const AWS = require('aws-sdk');

const GetCredentials = require('./lib/getCredentials');
const DeleteBucket = require('./lib/deleteBucket');

module.exports = function (params, done) {
  var s3 = new AWS.S3(GetCredentials(params));

  if (!params.Bucket) return done(new Error('"Bucket" not specified in params object'), null);

  params = { Bucket: params.Bucket };

  DeleteBucket(s3, params, done);
};

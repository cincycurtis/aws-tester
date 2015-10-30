const AWS = require('aws-sdk');
const Assert = require('assert');


const GetClient = require('./lib/getClient');
const DeleteBucket = require('./lib/deleteBucket');
const Helpers = require('./lib/helpers');

var s3;

module.exports = function (params, done) {
  Assert(Helpers.isObject(params), 'Params needs to be an object');
  Assert(Helpers.isString(params.Bucket), '"Bucket" not specified in params object');
  Assert(Helpers.isFunction(done), 'Must supply a callback');

  s3 = GetClient(params);

  DeleteBucket(s3, { Bucket: params.Bucket }, done);
};

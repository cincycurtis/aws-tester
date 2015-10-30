const Assert = require('assert');
const AWS = require('aws-sdk');
const Helpers = require('./helpers');

module.exports = function (params) {
  Assert(Helpers.isObject(params), 'Params needs to be an object');
  Assert(Helpers.isString(params.accessKeyId), 'Please provide "accessKeyId" as a string');
  Assert(Helpers.isString(params.secretAccessKey), 'Please provide "secretAccessKey" as a string');

  return new AWS.S3({
    accessKeyId: params.accessKeyId,
    secretAccessKey: params.secretAccessKey
  });
}
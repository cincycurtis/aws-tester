const Assert = require('assert');
const AWS = require('aws-sdk');
const Helpers = require('./helpers');

module.exports = function (params) {
  return new AWS.S3({
    accessKeyId: params.accessKeyId,
    secretAccessKey: params.secretAccessKey
  });
}
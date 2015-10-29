const Code = require('code');
const Lab = require('lab');

const DeleteBucket = require('../../lib/deleteBucket');
var S3 = require('../mocks/s3');


var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

var goodParams = {
      Bucket: 'my bucket',
      accessKeyId: 'access key id',
      secretAccessKey: 'secret access key'
    };

describe('DeleteBucket()', function () {
  it('exports a function', function (done) {
    expect(DeleteBucket).to.be.a.function();
    done();
  });

  it('succeeds', function (done) {
    DeleteBucket(S3, goodParams, function (err, res) {
      expect(err).to.be.null;
    });
    done();
  });

  it('fails if S3.listObjects errs', function (done) {
    S3.listObjects = function (opts, cb) {
      return cb(true, null);
    };

    DeleteBucket(S3, goodParams, function (err, res) {
      expect(err).to.exist();
    });
    done();
  });

  it('succeeds if bucket is empty', function (done) {
    S3.listObjects = function (opts, cb) {
      return cb(null, {Contents: []});
    };

    DeleteBucket(S3, goodParams, function (err, res) {
      expect(err).to.be.null();
    });

    done();
  });

  it('fails if S3.deleteBucket errs', function (done) {
    S3.deleteBucket = function (opts, done) {
      return done(true, null);
    }

    DeleteBucket(S3, goodParams, function (err, res) {
      expect(err).to.exist();
    });
    done();
  });
});

const Code = require('code');
const Lab = require('lab');
const Sinon = require('sinon');

var deleteBucket = Sinon.stub();
var getClient = Sinon.stub();

const Proxyquire = require('proxyquire');
const Unbucket = Proxyquire('..', {
  './lib/deleteBucket': deleteBucket,
  './lib/getClient': getClient
});

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;

var goodParams = {
      Bucket: 'my bucket',
      accessKeyId: 'access key id',
      secretAccessKey: 'secret access key'
    };

describe('Unbucket()', function () {
  afterEach(function (done) {
    getClient.reset();
    deleteBucket.reset();
    done();
  });

  beforeEach(function (done) {
    getClient.returns({});
    deleteBucket.yields(new Error('Delete Bucket'));
    done();
  });

  it('exports a function', function (done) {
    expect(Unbucket).to.be.a.function();
    done();
  });

  describe('when it works', function () {
    beforeEach(function (done) {
      deleteBucket.yields(null, true);
      done();
    });

    it('yields true', function (done) {
      Unbucket({Bucket: 'stuff'}, function (err, res) {
        expect(err).to.not.exist();
        expect(res).to.be.true();
        done();
      });
    });
  });

  describe('when fails', function () {
    beforeEach(function (done) {
      deleteBucket.yields(new Error('Delete Bucket Fails'));
      done();
    });

    it('yields an error', function (done) {
      Unbucket({Bucket: 'stuff'}, function (err, res) {
        expect(res).to.not.exist();
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Delete Bucket Fails');
        done();
      });
    });
  });
});
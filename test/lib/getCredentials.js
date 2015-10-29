const Code = require('code');
const Lab = require('lab');

const GetCredentials = require('../../lib/getCredentials');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

var goodParams = {
      accessKeyId: 'access key id',
      secretAccessKey: 'secret access key'
    };

var badParams = {
      notAccessKeyId: 'nope',
      notSecretAccessKey: 'definitely not'
    };
var oneGoodOneBadParams = {
      accessKeyId: 'access key id',
      notSecretAccessKey: 'nope'
    };

describe('Get Credentials', function () {
  it('exports a function', function (done) {
    expect(GetCredentials).to.be.a.function();
    done();
  });

  it('returns an object', function (done) {
    expect(GetCredentials(goodParams)).to.be.instanceOf(Object);
    done();
  });

  it('fails for bad params', function (done) {
    function testGetCredentialsWithBadParams () {
      GetCredentials(badParams);
    }

    expect(testGetCredentialsWithBadParams).to.throw(Error, 'Please provide access keys');
    done();
  });

  it('fails for bad params', function (done) {
    function testGetCredentialsWithOneGoodOneBadParams () {
      GetCredentials(oneGoodOneBadParams);
    }

    expect(testGetCredentialsWithOneGoodOneBadParams).to.throw(Error, 'Please provide access keys');
    done();
  });
});
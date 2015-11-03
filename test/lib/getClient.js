const Code = require('code');
const Lab = require('lab');

const GetClient = require('../../lib/getClient');

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

describe('Get Client', function () {
  it('exports a function', function (done) {
    expect(GetClient).to.be.a.function();
    done();
  });

  it('returns an object', function (done) {
    expect(GetClient(goodParams)).to.be.instanceOf(Object);
    done();
  });
});
const Code = require('code');
const Lab = require('lab');

const Unbucket = require('..');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('usage', function () {
  it('exports a function', function (done) {
    expect(Unbucket).to.be.instanceOf(Function);
    done();
  });

  describe('requirements', function () {
    it('requires an options object as the first param', function (done) {
      var fn = function () {
        Unbucket();
      }

      expect(fn).to.throw('Params needs to be an object');
      done();
    });

    it('requires params.Bucket', function (done) {
      var fn = function () {
        Unbucket({});
      };

      expect(fn).to.throw('"Bucket" not specified in params object');
      done();
    });

    it('requires a callback', function (done) {
      var fn = function () {
        Unbucket({Bucket:'test'});
      };

      expect(fn).to.throw('Must supply a callback');
      done();
    });
  });
});
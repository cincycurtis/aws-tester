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
});
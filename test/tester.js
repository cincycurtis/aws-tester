const DelS3 = require('../index');
const Secrets = require('./secrets');

if (!process.argv[2]) throw new Error('Please supply a bucketId');

var params = {
  Bucket: process.argv[2],
  accessKeyId: Secrets.accessKeyId,
  secretAccessKey: Secrets.secretAccessKey
}

DelS3(params, function (err, res){
  if (err) return console.log(err);
  console.log('success');
});
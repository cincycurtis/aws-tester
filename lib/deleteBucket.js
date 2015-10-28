const _ = require('underscore');

module.exports = function (params, client,done) {
  params = { Bucket: params.Bucket };
  if (params.Bucket) {
    client.listObjects(params, function (err, res) {
      var deleteParams;
      var bucketObjectsKeys = [];
      if (err) done(err, null);

      res.Contents.forEach(function (elem) {
        bucketObjectsKeys.push(_.pick(elem, 'Key'));
      });


      deleteParams = {
        Bucket: params.Bucket,
        Delete: {
          Objects: bucketObjectsKeys
        }
      };

      console.log('deleting %s objects from: %s', bucketObjectsKeys.length, params.Bucket);
      if (bucketObjectsKeys.length) {
        client.deleteObjects(deleteParams, function (err, data) {
          if (err) return console.log(err);

          console.log('deleting bucket: %s', params.Bucket);
          client.deleteBucket({'Bucket': params.Bucket}, function (err, data) {
            if (err) console.log(err);
            else console.log('SUCCESS');
          });
        });
      } else {
        console.log('deleting bucket: %s', params.Bucket);
        client.deleteBucket({'Bucket': params.Bucket}, function (err, data) {
          if (err) console.log(err);
          else console.log('SUCCESS');
        });
      }

    });
  } else {
    done(new Error('S3 delete bucket params not valid'), null);
  }

  done(null, 'Success');
}
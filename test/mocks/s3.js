var listObjects = function (opts, done) {
  return done(null, {Contents: [{Key: 'true'},{Key: 'true'}]});
}

var deleteObjects = function (opts, done) {
  return done(null, true);
}

var deleteBucket = function (opts, done) {
  return done(null, true);
}

module.exports = {
  listObjects: listObjects,
  deleteObjects: deleteObjects,
  deleteBucket: deleteBucket
};
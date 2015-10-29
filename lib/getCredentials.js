module.exports = function (params) {
  if (params.hasOwnProperty('accessKeyId') && params.hasOwnProperty('secretAccessKey')) {
    return {
      accessKeyId: params.accessKeyId,
      secretAccessKey: params.secretAccessKey
    };
  } else {
    throw new Error('Please provide access keys');
  }
}
function isObject(obj) {
  return {}.toString.call(obj) === '[object Object]';
}

function isString(str) {
  return typeof str === 'string';
}

function isFunction(fn) {
  return typeof fn === 'function';
}

module.exports = {
  isObject: isObject,
  isString: isString,
  isFunction: isFunction
}
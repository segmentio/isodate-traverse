
var is = require('is');
var isodate = require('isodate');

var clone;
var each;

try {
  clone = require('clone');
  each = require('each');
} catch (err) {
  clone = require('clone-component');
  each = require('each-component');
}

/**
 * Expose `traverse`.
 */

module.exports = traverse;


/**
 * Traverse an object, parsing all ISO strings into dates and returning a clone.
 *
 * @param {Object} obj
 * @return {Object}
 */

function traverse (input, strict) {
  if (strict === undefined) strict = true;
  if (is.object(input)) {
    return object(input, strict);
  } else if (is.array(input)) {
    return array(input, strict);
  }
}

function object (obj, strict) {
  obj = clone(obj);
  each(obj, function (key, val) {
    if (isodate.is(val, strict)) {
      obj[key] = isodate.parse(val);
    } else if (is.object(val) || is.array(val)) {
      obj[key] = traverse(val, strict);
    }
  });
  return obj;
}

function array (arr, strict) {
  arr = clone(arr);
  each(arr, function (val, x) {
    arr[x] = traverse(val, strict);
  });
  return arr;
}


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
 * Traverse an object or array, and return a clone with all ISO strings parsed
 * into Date objects.
 *
 * @param {Object} obj
 * @return {Object}
 */

function traverse (input, strict) {
  if (strict === undefined) strict = true;
  input = clone(input);

  if (is.object(input)) {
    return object(input, strict);
  } else if (is.array(input)) {
    return array(input, strict);
  }
}

/**
 * Object traverser.
 *
 * @param {Object} obj
 * @param {Boolean} strict
 * @return {Object}
 */

function object (obj, strict) {
  each(obj, function (key, val) {
    if (isodate.is(val, strict)) {
      obj[key] = isodate.parse(val);
    } else if (is.object(val) || is.array(val)) {
      obj[key] = traverse(val, strict);
    }
  });
  return obj;
}

/**
 * Array traverser.
 *
 * @param {Array} arr
 * @param {Boolean} strict
 * @return {Array}
 */

function array (arr, strict) {
  each(arr, function (val, x) {
    arr[x] = traverse(val, strict);
  });
  return arr;
}
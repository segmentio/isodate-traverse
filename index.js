
var clone = require('clone')
  , each = require('each')
  , is = require('is')
  , isodate = require('isodate');


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

function traverse (obj) {
  obj = clone(obj);
  each(obj, function (key, val) {
    if (isodate.is(val)) {
      obj[key] = isodate.parse(val);
    } else if (is.object(val)) {
      obj[key] = traverse(val);
    }
  });
  return obj;
}
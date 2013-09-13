
describe('isodate-traverse', function () {

var assert = require('assert')
  , equal = require('equals')
  , traverse = require('isodate-traverse');

it('should convert isostrings', function () {
  var obj = { date: '2013-09-04T00:57:26.434Z' };
  var traversed = traverse(obj);
  assert('2013-09-04T00:57:26.434Z' == traversed.date.toISOString());
});

it('should return a clone', function () {
  var obj = { a: '2' };
  var traversed = traverse(obj);
  assert(obj != traversed);
  assert(equal({ a: '2' }, traversed));
});

});

describe('isodate-traverse', function () {

  var assert = require('assert');
  var equal = require('equals');
  var traverse = require('isodate-traverse');

  it('should convert isostrings', function () {
    var obj = { date: '2013-09-04T00:57:26.434Z' };
    var traversed = traverse(obj);
    assert('2013-09-04T00:57:26.434Z' == traversed.date.toISOString());
  });

  it('should not convert numbers by default', function () {
    var obj = { number: '4000' };
    var traversed = traverse(obj);
    assert('4000' === traversed.number);
  });

  it('should convert numbers if strict mode is disabled', function () {
    var obj = { date: '2012' };
    var traversed = traverse(obj, false);
    assert(2011 == traversed.date.getFullYear());
  });

  it('should return a clone object', function () {
    var obj = { a: '2' };
    var traversed = traverse(obj);
    assert(obj != traversed);
    assert(equal({ a: '2' }, traversed));
  });

  it('should iterate through arrays', function () {
    var arr = [{ date: '2013-09-04T00:57:26.434Z' }];
    var traversed = traverse(arr);
    assert(arr != traversed);
    assert('2013-09-04T00:57:26.434Z' == traversed[0].date.toISOString());
  });

  it('should iterate through nested arrays', function () {
    var arr = [{
      date: '2013-09-04T00:57:26.434Z',
      array: [{ date: '2013-09-04T00:57:26.434Z' }]
    }];
    var traversed = traverse(arr);
    assert(arr != traversed);
    assert('2013-09-04T00:57:26.434Z' == traversed[0].array[0].date.toISOString());
  });

  it('should propagate the "strict" parameter for both types of traversals', function () {
    var obj = { a: '2012', b: [{ c: '2012' }] };
    var traversed = traverse(obj, false);
    assert(equal(2011, traversed.a.getFullYear()));
    assert(equal(2011, traversed.b[0].c.getFullYear()));
  });

});

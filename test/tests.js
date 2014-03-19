
describe('isodate-traverse', function () {

  var assert = require('assert');
  var equal = require('equals');
  var traverse = require('isodate-traverse');

  it('should convert isostrings', function () {
    var obj = { date: '2013-09-04T00:57:26.434Z' };
    traverse(obj);
    assert('2013-09-04T00:57:26.434Z' == obj.date.toISOString());
  });

  it('should not affect irrelevant object properties', function () {
    var obj = { a: '2013-12-13T23:35:50.000Z', b: "foo", c: null };
    traverse(obj);
    assert('foo' === obj.b);
    assert(null === obj.c);
  });

  it('should not affect irrelevant array indexes', function () {
    var obj = [ '2013-12-13T23:35:50.000Z', "foo", null ];
    traverse(obj);
    assert('foo' === obj[1]);
    assert(null === obj[2]);
  });

  it('should not convert numbers by default', function () {
    var obj = { number: '4000' };
    traverse(obj);
    assert('4000' === obj.number);
  });

  it('should convert numbers if strict mode is disabled', function () {
    var obj = { date: '2012' };
    traverse(obj, false);
    assert(2011 == obj.date.getFullYear());
  });

  it('should iterate through arrays', function () {
    var arr = [{ date: '2013-09-04T00:57:26.434Z' }];
    traverse(arr);
    assert('2013-09-04T00:57:26.434Z' == arr[0].date.toISOString());
  });

  it('should iterate through nested arrays', function () {
    var arr = [{
      date: '2013-09-04T00:57:26.434Z',
      array: [{ date: '2013-09-04T00:57:26.434Z' }]
    }];
    traverse(arr);
    assert('2013-09-04T00:57:26.434Z' == arr[0].date.toISOString());
    assert('2013-09-04T00:57:26.434Z' == arr[0].array[0].date.toISOString());
  });

  it('should propagate the "strict" parameter for both types of traversals', function () {
    var obj = { a: '2012', b: [{ c: '2012' }] };
    traverse(obj, false);
    assert(equal(2011, obj.a.getFullYear()));
    assert(equal(2011, obj.b[0].c.getFullYear()));
  });

  it('should do nothing for non-objects or non-arrays', function () {
    var date = new Date();
    var ret = traverse(date, false);
    assert(ret === date);
  });
});

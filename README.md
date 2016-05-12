
# isodate-traverse

  Traverse an object (or array) and convert all ISO strings into Dates.

## Installation

    $ npm install @segment/isodate-traverse

## Example

```js
var traverse = require('@segment/isodate-traverse');

var obj = {
  date: '2013-09-04T00:57:26.434Z'
};

var traversed = traverse(obj);
// {
//   date: [object Date]
// }
```

## API

### traverse(obj, [strict])
  Traverse an `obj`, converting all ISO strings to real Dates. By default, `strict` mode will be enabled, requiring at least YYYY-MM-DD

## License

  MIT

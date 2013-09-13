
# isodate-traverse
  
  Traverse an object, converting all ISO strings to real Dates.

## Installation

    $ component install segmentio/isodate-traverse

## Example

```js
var traverse = require('isodate-traverse');

var obj = {
  date: '2013-09-04T00:57:26.434Z'
};

var traversed = traverse(obj);
// {
//   date: [object Date]
// }
```

## API

### traverse(obj)
  Traverse an `obj`, converting all ISO strings to real Dates.

## License

  MIT

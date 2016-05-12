# isodate-traverse

[![CircleCI](https://img.shields.io/circleci/project/segmentio/isodate-traverse/master.svg?maxAge=2592000)](https://circleci.com/gh/segmentio/isodate-traverse)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/isodate-traverse/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/isodate-traverse)

Traverse an object (or array) and convert all ISO strings into Dates.

## Installation

```sh
$ npm install @segment/isodate-traverse
```

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

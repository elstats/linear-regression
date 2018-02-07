# linear-regression

Simple Linear Regression. 

## Installation

```bash
$ npm i @elstats/linear-regression
```

## Usage

```js
import linearRegression from '@elstats/linear-regression';

linearRegression([
    [1,   0.5],
    [2,   1.1],
    [3.1, 1.7],
    [3.9, 1.98],
    [5.2, 2.45],
    [6,   3]
]);
// { a: 0.4745265503156331, b: 0.1116728555514297 }
```

where `a` and `b` are parameters of regression line `y = a⋅x + b`.

## License

MIT

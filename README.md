# linear-regression [![Build Status](https://travis-ci.org/elstats/linear-regression.svg?branch=master)](https://travis-ci.org/elstats/linear-regression)

Simple Linear Regression. https://en.wikipedia.org/wiki/Simple_linear_regression

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
// { a: 0.4745265503156331, b: 0.1116728555514297, rSquared: 0.9898548897522457 }
```

where `a` and `b` are parameters of regression line `y = a⋅x + b`. Besides slope `a` and y-intercept `b` [coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination) is returned as `rSquared`.

## License

MIT

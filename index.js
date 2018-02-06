'use strict';

const mean = require('stats-mean').calc;
const variance = require('stats-variance').calc;
const covariance = require('@elstats/covariance');

function linearRegression(data) {
    const X = data.map(x => x[0]);
    const Y = data.map(x => x[1]);

    const b = covariance(X, Y) / variance(X);
    const a = mean(Y) - b * mean(X);

    return { a, b };
}

module.exports = linearRegression;

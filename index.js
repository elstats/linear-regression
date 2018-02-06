'use strict';

const mean = require('stats-mean').calc;
const variance = require('stats-variance').calc;
const covariance = require('@elstats/covariance');

function linearRegression(data) {
    const X = data.map(x => x[0]);
    const Y = data.map(x => x[1]);

    const a = covariance(X, Y) / variance(X);
    const b = mean(Y) - a * mean(X);

    return { a, b };
}

module.exports = linearRegression;

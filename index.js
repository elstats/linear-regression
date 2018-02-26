import { calc as mean } from 'stats-mean';
import { calc as variance } from 'stats-variance';
import covariance from '@elstats/covariance';

export default function linearRegression(data) {
    const X = data.map(x => x[0]);
    const Y = data.map(x => x[1]);
    const meanY = mean(Y);

    const a = covariance(X, Y) / variance(X);
    const b = meanY - a * mean(X);

    const totalSumOfSquares = Y.reduce((acc, cur) => {
        acc += Math.pow(cur - meanY, 2);
        return acc;
    }, 0);

    const residualSumOfSquares = Y.reduce((acc, cur, i) => {
        acc += Math.pow(cur - (a * X[i] + b), 2);
        return acc;
    }, 0);

    return {
        a,
        b,
        rSquared: 1 - residualSumOfSquares / totalSumOfSquares
    };
}

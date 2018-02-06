import { calc as mean } from 'stats-mean';
import { calc as variance } from 'stats-variance';
import covariance from '@elstats/covariance';

export default function linearRegression(data) {
    const X = data.map(x => x[0]);
    const Y = data.map(x => x[1]);

    const a = covariance(X, Y) / variance(X);
    const b = mean(Y) - a * mean(X);

    return { a, b };
}

import test from 'ava';
import linearRegression from './index';

test('should calculate linear regression', t => {
    const given = [
        [1,   0.5],
        [2,   1.1],
        [3.1, 1.7],
        [3.9, 1.98],
        [5.2, 2.45],
        [6,   3]
    ];

    const expected = linearRegression(given);

    t.deepEqual(expected, {
        a: 0.4745265503156331,
        b: 0.1116728555514297,
        rSquared: 0.9898548897522457
    });
});

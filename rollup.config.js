'use strict';

const resolve = require('rollup-plugin-node-resolve');
const cjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup');
const uglify = require('rollup-plugin-uglify');

module.exports = {
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: '_lR'
    },
    plugins: [
        resolve(),
        cjs(),
        babel(babelrc.default()),
        uglify()
    ]
};

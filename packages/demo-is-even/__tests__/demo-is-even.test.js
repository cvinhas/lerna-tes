'use strict';

const demoIsEven = require('..');
const assert = require('assert').strict;

assert.strictEqual(demoIsEven(), 'Hello from demoIsEven');
console.info('demoIsEven tests passed');

'use strict';

const apiTest = require('..');
const assert = require('assert').strict;

assert.strictEqual(apiTest(), 'Hello from apiTest');
console.info('apiTest tests passed');

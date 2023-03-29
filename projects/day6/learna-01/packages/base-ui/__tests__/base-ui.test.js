'use strict';

const baseUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(baseUi(), 'Hello from baseUi');
console.info('baseUi tests passed');

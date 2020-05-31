const assert = require("assert").strict;
const bayes = require("./");

assert.strictEqual(bayes(0.98, 0.0001, 0.20078), 0.00048790706895792746);

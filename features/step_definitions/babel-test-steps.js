'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  this.World = _world.World;
  this.Given(/^I have a module I want imported$/, function (callback) {
    console.log('foo bar baz, accordingly' + this.punctuation);
    callback.pending();
  });
};

var _world = require('../support/world');

;
module.exports = exports['default'];
//# sourceMappingURL=babel-test-steps.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  this.Given(/^I have a module I want imported$/, function (callback) {
    console.log('foo bar baz, accordingly!');
    callback.pending();
  });
};

;
module.exports = exports['default'];
//# sourceMappingURL=babel-test-steps.js.map
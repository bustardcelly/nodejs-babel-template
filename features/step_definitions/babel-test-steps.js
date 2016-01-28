'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  this.World = _world.World;
  this.Given(/^I have a module I want imported$/, function (callback) {
    // World support has been imported correctly.
    _assert2.default.equal(this.punctuation, '!');
    callback();
  });

  this.When(/^I use the import directive$/, function (callback) {
    // import directive has loaded assertion library.
    _assert2.default.notEqual(_chai2.default, null);
    callback();
  });

  this.Then(/^The module exports are loaded and accessible$/, function (callback) {
    // Testing import of project-dev module.
    var result = (0, _greeting2.default)('World');
    expect(result).to.equal('Hello, World!');
    callback();
  });
};

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _world = require('../support/world');

var _greeting = require('../../build/greeting');

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_sinonChai2.default);

;
module.exports = exports['default'];
//# sourceMappingURL=babel-test-steps.js.map
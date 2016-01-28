'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  this.World = _world.World;
  this.Given(/^I have a module I want imported$/, function (callback) {
    console.log('foo bar baz, accordingly' + this.punctuation);
    expect(this.punctuation).to.equal('!');
    callback();
  });
};

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _world = require('../support/world');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_sinonChai2.default);

;
module.exports = exports['default'];
//# sourceMappingURL=babel-test-steps.js.map
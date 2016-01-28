'use strict';

import assert from 'assert';
import chai from 'chai';
import sinon from 'sinon';
import sinonchai from 'sinon-chai';

import {World} from '../support/world';

import greeting from '../../build/greeting';

const expect = chai.expect
chai.use(sinonchai);

export default function () {

  this.World = World;
  this.Given(/^I have a module I want imported$/, function(callback) {
    // World support has been imported correctly.
    assert.equal(this.punctuation, '!');
    callback();
  });

  this.When(/^I use the import directive$/, function (callback) {
    // import directive has loaded assertion library.
    assert.notEqual(chai, null);
    callback();
  });

  this.Then(/^The module exports are loaded and accessible$/, function (callback) {
    // Testing import of project-dev module.
    const result = greeting('World');
    expect(result).to.equal('Hello, World!');
    callback();
  });

};

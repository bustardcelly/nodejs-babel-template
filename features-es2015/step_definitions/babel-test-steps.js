'use strict';

import chai from 'chai';
import sinon from 'sinon';
import sinonchai from 'sinon-chai';

import {World} from '../support/world';

const expect = chai.expect
chai.use(sinonchai);

export default function () {

  this.World = World;
  this.Given(/^I have a module I want imported$/, function(callback) {
    console.log('foo bar baz, accordingly' + this.punctuation);
    expect(this.punctuation).to.equal('!');
    callback();
  });

};

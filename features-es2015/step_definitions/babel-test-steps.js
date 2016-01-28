'use strict';

import {World} from '../support/world';

export default function () {

  this.World = World;
  this.Given(/^I have a module I want imported$/, function(callback) {
    console.log('foo bar baz, accordingly' + this.punctuation);
    callback.pending();
  });

};

'use strict';

export default function () {

  this.Given(/^I have a module I want imported$/, (callback) => {
    console.log('foo bar baz, accordingly!');
    callback.pending();
  });

};

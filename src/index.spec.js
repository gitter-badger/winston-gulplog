'use strict';

var GulplogLogger = require('./index');

var expect = require('chai').expect;

describe('GulplogLogger', function() {

  it('should be a function', function() {
    expect(GulplogLogger).to.be.a('function');
  });
});

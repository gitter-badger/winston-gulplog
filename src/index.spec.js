'use strict';

var expect = require('chai').expect;
var proxyquire = require('proxyquire');
var sinon = require('sinon');

var GulplogLogger = proxyquire('./index.js', {
  gulplog: {
    warn: sinon.spy(),
    info: sinon.spy(),
    '@noCallThru': true,
  },
});

describe('GulplogLogger', function() {
  var gulplogLogger;

  it('has a default log level of info', function() {
    gulplogLogger = new GulplogLogger();

    expect(gulplogLogger.level).to.equal('info');
  });
});

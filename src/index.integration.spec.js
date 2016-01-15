'use strict';

var chai = require('chai');
var proxyquire = require('proxyquire');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var winston = require('winston');

chai.use(sinonChai);
var expect = chai.expect;

var gulplog = {
  warn: sinon.spy(),
  info: sinon.spy(),
  '@noCallThru': true,
};

var GulplogLogger = proxyquire('./index.js', {
  gulplog: gulplog,
});

describe('GulplogLogger', function() {
  var logger;

  beforeEach(function() {
    logger = new winston.Logger({
      transports: [
        new GulplogLogger(),
      ],
    });
  });

  it('logs sent to gulplog', function() {
    logger.warn('test message');

    expect(gulplog.warn).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly('test message');
  });

  it('does not send metadata to gulplog', function() {
    logger.info('test message', { something: 'value' });

    expect(gulplog.info).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly('test message');
  });
});

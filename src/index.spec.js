'use strict';

var chai = require('chai');
var proxyquire = require('proxyquire');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

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

describe('GulplogLogger', function () {
  var gulplogLogger;

  beforeEach(function () {
    gulplog.warn.reset();
    gulplog.info.reset();
  });

  it('has a default log level of info', function () {
    gulplogLogger = new GulplogLogger();

    expect(gulplogLogger.level).to.equal('info');
  });

  it('logs to `gulplog`', function () {
    var callback = sinon.spy();
    gulplogLogger = new GulplogLogger();

    gulplogLogger.log('warn', 'test message', {}, callback);

    expect(gulplog.warn).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly('test message');
    expect(gulplog.info).to.not.have.been.called;
    expect(callback).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly(null, true);
  });

  it('defaults to info if invalid log level provided', function () {
    var callback = sinon.spy();
    gulplogLogger = new GulplogLogger();

    gulplogLogger.log('invalid', 'test message', {}, callback);

    expect(gulplog.warn).to.not.have.been.called;
    expect(gulplog.info).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly('test message');
    expect(callback).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly(null, true);
  });
});

'use strict';

var gulplog = require('gulplog');
var util = require('util');
var winston = require('winston');

var GulplogLogger = module.exports = winston.transports.GulplogLogger = function (options) {
  winston.Transport.call(this, options);
  options = options || {};

  this.name = 'GulplogLogger';

  this.level = options.level || 'info';
};

util.inherits(GulplogLogger, winston.Transport);

GulplogLogger.prototype.log = function (level, msg, meta, callback) {
  if (gulplog[level]) {
    gulplog[level](msg);
  } else {
    gulplog.info(msg);
  }

  callback(null, true);
};

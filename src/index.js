'use strict';

var gulplog = require('gulplog');
var util = require('util');
var winston = require('winston');

module.exports = Gulplog;

/**
 * `gulplog` transport for winston.
 *
 * @constructor
 * @param {Object} options
 * @param {string} [options.level=info] Level of messages that this transport should log.
 */
function Gulplog(options) {
  winston.Transport.call(this, options);
  options = options || {};

  this.name = 'gulplog';

  this.level = options.level || 'info';
}

/**
 * Inherit from `winston.Transport` to take advantage of base functionality.
 */
util.inherits(Gulplog, winston.Transport);

/**
 * Define a getter so that `winston.transports.Gulplog` is available and thus backwards compatible.
 */
winston.transports.Gulplog = Gulplog;

/**
 * Core logging method exposed to winston.
 *
 * @param {string} level Level at which to log the message.
 * @param {string} msg Message to log.
 * @param {Object} [meta] Additional metadata to associate with a log message.
 * @param {Function} callback Callback when log has been written to transport.
 */
Gulplog.prototype.log = function (level, msg, meta, callback) {
  if (gulplog[level]) {
    gulplog[level](msg);
  } else {
    gulplog.info(msg);
  }

  callback(null, true);
};

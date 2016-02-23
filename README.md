# winston-gulplog

[![Join the chat at https://gitter.im/hbetts/winston-gulplog](https://badges.gitter.im/hbetts/winston-gulplog.svg)](https://gitter.im/hbetts/winston-gulplog?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/hbetts/winston-gulplog.svg?branch=master)](https://travis-ci.org/hbetts/winston-gulplog)
[![codecov.io](https://codecov.io/github/hbetts/winston-gulplog/coverage.svg?branch=master)](https://codecov.io/github/hbetts/winston-gulplog?branch=master)
[![Dependency Status](https://david-dm.org/hbetts/winston-gulplog.svg)](https://david-dm.org/hbetts/winston-gulplog)
[![devDependency Status](https://david-dm.org/hbetts/winston-gulplog/dev-status.svg)](https://david-dm.org/hbetts/winston-gulplog#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)

> A transport for winston that sends log messages to gulplog.

`winston-gulplog` is a transport for the [winston](https://github.com/winstonjs/winston) logger. `winston-gulplog` submits log events to [gulplog](https://www.npmjs.com/package/gulplog), a singleton logger used by the [gulp](http://gulpjs.com/) task runner.

## Installation

To install `winston-gulplog` from npm, run:

```bash
npm install --save winston-gulplog
```

## Usage

If you already have a winston logger instance, you can add the `winston-gulplog` transport like so:

```javascript
var Gulplog = require('winston-gulplog');

logger.add(new Gulplog());
```

It can also be added at the time a new winston logger is instantiated:

```javascript
var Gulplog = require('winston-gulplog');

var logger = new winston.Logger({
  transports: [
    new Gulplog()
  ]
});
```

Now, when logging to your winston instance, any message sent to a log level will be sent to the same log level for `gulplog`. Please keep in mind that any metadata sent to your winston instance will **not** be sent to `gulplog`.

## Contributing

Read [CONTRIBUTING](CONTRIBUTING.md).

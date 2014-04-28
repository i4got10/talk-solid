var Logger = require('logger');
var yaLogger = require('yaLogger');
var browser = require('browser');

var logger = new Logger(yaLogger, browser);
logger.start(1000);

var debounce = require('debounce');

module.exports = function (logger, browser) {
    this.browser = browser;
    this.logger = logger;
};

module.exports.prototype.start = function (timeout) {
    window.onerror = debounce(function (message, file, line, column) {
        this.logger.error({
            message: message,
            file: file,
            line: line,
            column: column,
            browser: this.browser.getName(),
            hostname: location.hostname
        })
    }.bind(this), timeout, true);
}

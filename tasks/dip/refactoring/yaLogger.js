module.exports = function () {};

module.exports.prototype.error= function (options) {
    yaCounter12208345.params(
        'error',
        options.host,
        options.message,
        options.file + ':' + options.line + ':' + (options.column || 0),
        options.browser
    );
};

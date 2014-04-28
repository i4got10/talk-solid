module.exports = function(formatter) {
    this.formatter = formatter || {
        format: function (options) {
            return JSON.stringify(options);
        }
    };
};

module.exports.prototype.error = function (options) {
    var log = this.formatter.format(options);
    new Image('/favicon.ico?log=' + log);
};

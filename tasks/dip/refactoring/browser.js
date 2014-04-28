module.exports = {
    getName: function() {
        var browser = navigator.userAgent.match(/[a-zA-Z]+\/[0-9.A-F]+/g)
            .filter(function (string) {
                return !/^(AppleWebKit|WebKit|Safari|Gecko|Mozilla)/.test(string);
            })
            .map(function (string) {
                return string.replace(/^Version/, 'Safari');
            })
            .join(' ');
        return browser;
    }
}

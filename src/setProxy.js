const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://175.201.134.167:8000/'
        })
    );
};
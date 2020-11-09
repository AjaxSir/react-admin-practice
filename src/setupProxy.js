const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/v2', {
            target: 'https://douban.uieee.com',
            changeOrigin: true,
            pathRewrite: {
                '^/v2': '/v2',
            }, // 如果请求地址里面不含v2 那么就需要重写成 "^/v2" : ""
        }),
        createProxyMiddleware('/api', {
            target: 'http://172.16.2.43:18080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api',
            },
        })
    )
}
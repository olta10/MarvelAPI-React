const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://superheroapi.com/api/5f27aee6001188a106155114a78714c3',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    })
  );
};

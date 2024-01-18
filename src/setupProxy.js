const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api-region', {
      target: 'http://127.0.0.1:5001',
      changeOrigin: true,
      pathRewrite: {
        "^/api-region": "/api",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://127.0.0.1:3300',
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/image-web-service', {
      target: 'http://127.0.0.1:6600',
      changeOrigin: true,
      pathRewrite: {
        "^/image-web-service": "/",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}
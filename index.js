const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');

// proxy middleware options
var options = {
    target: '/', 
    changeOrigin: true,
    router: function(req) {
        const {host} = req.headers;
        return host.startsWith("aeco") ? "http://localhost:3000" : "http://localhost:4000";
    }
};

const app = express();
app.use("/",proxyMiddleware(options))
app.listen(80);
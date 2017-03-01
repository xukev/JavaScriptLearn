var http = require("http");

http.createServer(function (req, res) {
    res.end('');
});

console.log('server running at http://127.0.0.1:8888/');
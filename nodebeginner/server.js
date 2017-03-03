var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request " + pathname + "received");

        res.writeHead(200, { "Content-Type": "text/plain" });
        var content = route(handle, pathname);
        if (typeof content === 'string') {
            res.write(content);
        }
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start = start;
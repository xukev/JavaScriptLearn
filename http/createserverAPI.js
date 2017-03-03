var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var body = [];

    console.log(req.method);
    console.log(req.headers);

    req.on('data', function(chunk) {
        body.push(chunk);

        res.write(chunk);
    });

    req.on('end', function() {
        body = Buffer.concat(body);
        console.log(body.toString());

        res.end();
    });
}).listen(8888);
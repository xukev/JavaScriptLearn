var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '老师讲的很好，This is 测试',
    'cid': 348
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'PHPSESSID=540gm5sp7q27l6i1hsn2q93vh3; imooc_uuid=fc099021-410b-47be-a555-aeae11f95887; imooc_isnew_ct=1488250806; loginstate=1; apsid=RkNzQxOTA1MTc5NjgwYmY0NGNkZDdlM2VjNDk4OWUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDkyNDI2MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNhMmJiZmM1ZDI4YjdjMzYzZjUxZDljZmY2YzU2ZDdiTOi0WEzotFg%3DMj; _sm_au_c=iVVJ2JtwqvJ77n1s0a; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1488250810; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1488355273; imooc_isnew=2; cvde=58b4e7b6ea407-235',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    console.log('status: ' + res.statusCode);
    console.log('headers: ' + res.headers);

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end', function() {
        console.log('comment end!');
    });

    res.on('error', function(e) {
        console.log('Error: ' + e.message);
    });
});

req.write(postData);
req.end();
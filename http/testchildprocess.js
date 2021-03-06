var child_process = require('child_process');

var child = child_process.spawn('node', ['testchild_print_out.js']);

child.stdout.on('data', function(data) {
    console.log('stdout:' + data);
});

child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
});

child.on('close', function(code) {
    console.log('child process exited with code ' + code);
});
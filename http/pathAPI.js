var path = require('path');

var cache = {};

function store(key, value) {
    cache[path.normalize(key)] = value;
}

store('http/pathAPI.js', 1);
store('http/event.js', 2);

store(path.join('http', 'scope.js'), 3);

console.log(cache);
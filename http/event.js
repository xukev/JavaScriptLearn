var EventEmitter = require('events');

var life = new EventEmitter();

function water(who) {
    console.log('give ' + who + ' water');
}

life.on('wife', water);

life.on('wife', function(who) {
    console.log('give ' + who + ' 2');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 3');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 4');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 5');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 6');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 7');
});

life.on('wife', function(who) {
    console.log('give ' + who + ' 8');
});

life.on('husband', function(who) {
    console.log('give' + who + ' car');
});

life.removeListener('wife', water);

life.removeAllListeners('wife');

console.log(life.listeners('wife').length);
console.log(life.listeners('husband').length);
//life.emit('wife', 'Jean');

function one(test) {
    console.log(test);
}

var obj = {
    one: 1,
    two: 2
}
/*var path = require('path');
var express = require("express");

var app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(8888);*/

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log ('1');
    next(new Error('Testing'));
});

app.use( function (req, res, next) {
    console.log('2');
    res.status(200).end();
});

app.use( function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!!');
});

app.listen(8888);
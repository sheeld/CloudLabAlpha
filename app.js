var http = require("http");
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var connectMongo = require('connect-mongo');
var MongoStore = connectMongo(expressSession);

var config = require('./config');
var routes = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
// var trends = require('./routes/trends');
// var profile = require('./routes/profile');
var projects = require('./routes/projects');

var passportConfig = require('./auth/passport-config');
var restrict = require('./auth/restrict');
passportConfig();

mongoose.connect(config.mongoUri);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession(
    {
        secret: 'Gilgamesh',
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
           mongooseConnection: mongoose.connection 
        })
    }
));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/projects', projects);
app.use('/home', home);
// app.use('/home#/projects', projects);
// app.use('/home#/trends', trends);
// app.use('/home#/profile', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// prints stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
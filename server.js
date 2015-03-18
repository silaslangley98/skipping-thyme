// MODULES

var express         = require('express'),
    app             = express(),
    path            = require('path'),
    fs              = require('fs'),
    logger          = require('morgan'),
    mongoose        = require('mongoose'),
    uriUtil         = require('mongodb-uri'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    session         = require('express-session'),
    LocalStrategy   = require('passport-local').Strategy,
    bcrypt          = require('bcrypt-nodejs'),
    http            = require('http'),
    nodemailer      = require('nodemailer');
    
require('./app/models/User.js');
require('./app/models/Plant.js');

// CONFIGURATION

var port = process.env.PORT || 9001; // make the app listen on the PORT environment variable or on port 9001 if there isn't one

var mongodbUri = 'mongodb://basil:mint@ds063870.mongolab.com:63870/nursery-plants'; // assign the 'nursery-plants' database's Uri to a variable

var mongooseUri = uriUtil.formatMongoose(mongodbUri); // Convert mongodb's connection string format to a format Mongoose understands

mongoose.connect(mongooseUri); // open a connection to the database

// REGISTER MODULES -- setting up the middleware
app.use(logger('dev')); //middleware that logs to the console information about requests and responses
app.use(bodyParser.json()); // middleware that parses JSON text and stores it in the 'body' property of the 'request' object
app.use(bodyParser.urlencoded({ extended: true })); // middleware that parses url-encoded text and stores it in the 'body' property of the 'request' object
app.use(cookieParser()); // middleware that parses request cookies and puts them into req.cookies

app.use(express.static(__dirname + '/public')); // serves up static content from the app's 'public' directory -- this makes it possible for the browser to access almost anything from the 'public' directory

app.use(session({  // this middleware is necessary to create a persistent login session
    secret: 'SECRET',
    saveUninitialized: true,
    resave: true }));   
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    if (req.user) {
        res.cookie('user', JSON.stringify(req.user));
    }
    next();
});

// PASSPORT
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    var User = mongoose.model('User');

    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local', new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
    var User = mongoose.model('User');

    User.findOne({ email: email }, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);

        function cb(err, isMatch) {
            if (err) return done(err);
            if (isMatch) return done(null, user);
            return done(null, false);
        }
        bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    });
}));

// ROUTES

require('./app/admin-routes.js')(app);
require('./app/routes.js')(app);

// START APP

var io = require('socket.io').listen(app.listen(port)); // the app is also started here -- the socket and the app need to be on the same port

//app.listen(port); // at http://localhost: 9001

// INFORM USER
console.log("Leaves grow at " + port);

// SOCKET

app.get('/socket.io/socket.io.js', function(req, res) {
  res.set('Content-Type', 'text/javascript');
  res.sendfile('/socket.io/socket.io.js');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

// EXPOSE APP

exports = module.exports = app;

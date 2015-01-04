// MODULES

var express			= require('express'),
	session      	= require('express-session'),
	fs          	= require('fs'),
	path        	= require('path'),
	mongoose    	= require('mongoose'),
	bodyParser		= require('body-parser'),
	cookieParser	= require('cookie-parser'),
	logger			= require('morgan'),
	bcrypt			= require('bcrypt-nodejs'),
	uriUtil      	= require('mongodb-uri'),
	http         	= require('http'),
	passport     	= require('passport'),
    LocalStrategy 	= require('passport-local').Strategy,
	app 			= express();

require('./app/models/User.js');

// CONFIGURATION

var port = process.env.PORT || 9001;

var mongodbUri = 'mongodb://basil:mint@ds063870.mongolab.com:63870/nursery-plants';

var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri);

// REGISTER MODULES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use(session({ 
    secret: 'blackwidow straw',
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

require('./app/routes.js')(app);

// START APP
app.listen(port); // at http://localhost: 9001

// INFORM USER
console.log("Leaves grow at " + port);

// EXPOSE APP

exports = module.exports = app;

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
	app 			= express();

// CONFIGURATION

var port = process.env.PORT || 9001;

var mongodbUri = 'mongodb://basil:mint@ds063870.mongolab.com:63870/nursery-plants';

var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri);

// REGISTER MODOULES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

// ROUTES

require('./app/routes.js')(app);

// START APP
app.listen(port); // at http://localhost: 9001

// INFORM USER
console.log("Leaves grow at " + port);

// EXPOSE APP

exports = module.exports = app;

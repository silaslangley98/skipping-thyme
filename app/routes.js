module.exports = function(app) {

	var mongoose = require('mongoose');
	var passport = require('passport');
	var router = require('express').Router();

	require('./models/Plant.js');
	require('./models/User.js');

	Plant = mongoose.model('Plant');
	User = mongoose.model('User');

	//SERVER ROUTES

	router.route('/plants')

		.get(function(req, res) {

			Plant.find(req.query, function(err, plants) {

				if (err) 
					res.send(err);

				res.send(plants);
			});
		});

	router.route('/plants/:id')
        .get(function(req, res) {
            Plant.findOne({id: req.params.id}, function(err, plant) {
                
                if (err)
                    res.send(err);

                res.send(plant);

            });
        });

    /*router.route('/users')
        .get(function(req, res) {
        
            User.find(req.query, function(err, users) {
                
                if (err) res.send(err);

                res.send(users);
            });
        })

    	.post(function(req, res) {

            User.create(req.body, function(err, user) {

                if(err) res.send(err);

                res.send(user);
            });

        });

    router.route('/users/:id')
        .get(function(req, res) {

            User.findOne({_id: req.params.id}, function(err, user) {
                if (err) {res.send(err)};

                res.send(user);
            });
        })

        .post(function(req, res) {
           
            User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
                if(err) res.send(err);

                res.send(user);
            });
        });
    */

    // signup API route
    router.route('/register')
        .post(function(req, res, next) {

            var User = mongoose.model('User');
            var user = new User({
                email: req.body.email,
                password: req.body.password
            });
            user.save(function(err) {
                if (err) return next(err);
                res.send(200);
            });
        });

    // logout API route
    router.route('/logout')
        .get(function(req, res, next) {
            req.logout();
            res.send(200);
        });

    // login API route

    router.route('/login')
        .post(passport.authenticate('local'), function(req, res) {
            if (req.isAuthenticated()) {
                res.cookie('user', JSON.stringify(req.user));
                res.send(req.user);
            }
        });

	// FRONT END ROUTES

	app.use('/api', router);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
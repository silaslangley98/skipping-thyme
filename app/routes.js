module.exports = function(app) {

	var mongoose = require('mongoose');

	var router = require('express').Router();

	require('./models/Plant.js');

	Plant = mongoose.model('Plant');

	//SERVER ROUTES

	router.route('/plants')

		.get(function(req, res) {

			Plant.find(req.query, function(err, plants) {

				if (err) 
					res.send(err);

				res.send(plants);
			});
		});

	// FRONT END ROUTES

	app.use('/api', router);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
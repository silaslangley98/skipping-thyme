module.exports = function(app) {

    var mongoose	 = require('mongoose');
    var passport 	 = require('passport');
	var router 		 = require('express').Router();

    var User 		 = mongoose.model('User');
	var Plant 		 = mongoose.model('Plant');

	/* ======================= MIDDLEWARE ====================== */

    /* TO ADD LATER 
    function checkRole(role) {
        return function(req, res, next) {
             //if (req.user.isAdmin == true
            if (req.user && req.user[role]) {
                next();
            } else {
                res.send(401, "Unauthorized");
            }
        }
    }

	*/

/* ======================= REST ROUTES ====================== */
    
/* TO ADD LATER
    router.route('/*')
        .all(checkRole('isAdmin'));
*/

// Plants API route
    router.route('/plants')
        .get(function(req, res) {
            var filter = {
                isActive: true
            };

 			Plant.find(filter, function(err, plants) {
				if (err)
	                res.send(err);

	                res.send(plants);
	            });
	        })

	        .post(function(req, res) {

	            Plant.create(req.body, function(err, plant) {

	                if(err) {
	                	res.send(err);
					}

	                res.send(plant);
	            });

	        })

	        .delete(function(req, res) {

	            Plant.findByIdAndRemove(req.params.id, function(err, response) {
	                if(err) res.send(err);

	                res.send(response);
	            });

	        });

	    router.route('/users')
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
		        })
	              
	        .delete(function(req, res) {

		        User.findByIdAndRemove(req.params.id, function(err, response) {
	                if(err) res.send(err);

	                res.send(response);
	            });

	        });

    app.use('/api/admin', router);
  
};




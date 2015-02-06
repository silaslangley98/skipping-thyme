(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantDetailController', function($scope, $stateParams, PlantService, API){

		var plant_id = $stateParams.id; // $stateParams is an object consisting of key-value pairs in the url - here the value for the id key is grabbed from the url and assigned to this variable -- the id was passed to the url when the user clicked the "product details button"

        var items = PlantService.query(function() { // assigns to the 'items' variable the results from a databse query that is ultimately made in the routes.js file
            // for each of the items resulting from the query to the database, check to see if the id grabbed from the url matches the guid of one of these items, if so then assign that item to the plant variable on the scope - this is how to tell the plant-detail view which plant the user has chosen to get details about
            angular.forEach(items, function(item) {
                if(item.guid === plant_id) {
                    $scope.plant = item;
                };
            });
        });
        
	});

})(window.angular);

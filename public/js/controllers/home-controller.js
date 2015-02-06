(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('HomeController', function($scope, CartService, PlantService){

		/* PlantService.getPlants().then

			(function(results){

				$scope.plants = results.data;
				console.log("Success: " + results.data);
			
			},

				function(results){
				console.log("Error: " + results.data);
			}); */


        var items = PlantService.query(); // 'items' will equal the result of the query to the mongodb database 

        $scope.plants = items; // making 'items' available on the scope as 'plants'

		$scope.getItemCount = CartService.getItemCount; // making the Cart Service's getItemCount function available to the scope

		$scope.addItem = CartService.addItem; // making the addItem function available to the scope

		$scope.getCartTotal = CartService.getCartTotal; // making the getCartTotal function available to the scope

		$scope.cartDisplay = CartService.cartDisplay; 

		// Reset the Product Search entries in the home view when the reset button is clicked
		$scope.master = {}; // creating an empty object

		$scope.reset = function() {
    		$scope.productSearch = angular.copy($scope.master); // setting productSearch to the empty object so that the search entries are cleared
    	};
  
  		$scope.reset();
  		
  	});

})(window.angular);
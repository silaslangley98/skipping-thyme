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


        var items = PlantService.query();

        $scope.plants = items;

		$scope.getItemCount = CartService.getItemCount;

		$scope.addItem = CartService.addItem;

		$scope.getCartTotal = CartService.getCartTotal;

		$scope.cartDisplay = CartService.cartDisplay;

		$scope.master = {};

		$scope.reset = function() {
    		$scope.productSearch = angular.copy($scope.master);
    	};
  
  		$scope.reset();
  		
  	});

})(window.angular);
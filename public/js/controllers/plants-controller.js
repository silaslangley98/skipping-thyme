(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantsController', function($scope, API){

		$scope.plants = API.plants.query();

	});

})(window.angular);
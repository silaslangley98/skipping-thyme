(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantDetailController', function($scope, $stateParams, PlantService, API){

		var plant_id = $stateParams.id;

        var items = PlantService.query(function() {
            angular.forEach(items, function(item) {
                if(item.guid === plant_id) {
                    $scope.plant = item;
                };
            });
        });
        
	});

})(window.angular);

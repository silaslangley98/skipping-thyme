(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantsController', function($scope, $state, $timeout, API, AddPlantService){

		$scope.plants = API.plants.query();

        $scope.formInfo = {};

		function successCallback() {
            $scope.alert = {
                type: 'success',
                message: 'The plant has been added.'
            };

            $timeout(function() {

                $state.go('plants');

                $scope.alert = undefined;

            }, 3000);

            $scope.plants = API.plants.query();
        }

        function errorCallback() {
            $scope.alert = {
                type: 'danger',
                message: 'There was an error adding the plant. Please try again.'
            };

            $timeout(function() {
                $scope.alert = undefined;

            }, 4000);
        }

        $scope.addPlant = function() {
            AddPlantService.addPlant({
                name : $scope.formInfo.name,
            }, successCallback, errorCallback);
        };
		
	});

})(window.angular);
(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantsController', function($scope, $state, $timeout, API, AddPlantService){

		$scope.plants = API.plants.query(); // get the data on all the plants from the database via the API service

        $scope.formInfo = {};

		function successCallback() {
            $scope.alert = {
                type: 'success',
                message: 'The plant has been added.'
            };

            $timeout(function() {  // wait 3 seconds

                $scope.alert = undefined; // removes the above success message

            }, 3000);

            $scope.plants = API.plants.query(); // grabs the plants data from the database so that the added plant will now be on the scope
        }

        function errorCallback() {
            $scope.alert = {
                type: 'danger',
                message: 'There was an error adding the plant. Please try again.'
            };

            $timeout(function() {
                $scope.alert = undefined; // remove the error message after 4 seconds

            }, 4000);
        }

        $scope.addPlant = function() { //makes the addPlant function available to the scope -- it is called from the add-plant input form in the plants view
            AddPlantService.addPlant({
                name : $scope.formInfo.name, // sends the plant name inputted on the add-plant form in the view to the Add Plant Service which will send it to the database
            }, successCallback, errorCallback);
        };
		
	});

})(window.angular);
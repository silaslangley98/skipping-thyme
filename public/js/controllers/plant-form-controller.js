(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantFormController', function($scope, API, $stateParams){

		function updateSuccess() { // callback function for when the plant information is successfully updated in the database
            $scope.alert = {
                type: 'success',
                message: 'You have successfully updated the plant.'
            };
        }

        function deleteSuccess() { // callback function for when the plant is successfully deleted from the database
        	$scope.alert = {
        		type: 'success',
        		message: 'You have successfully deleted the plant.'
        	};
        }

        API.plant.get({id: $stateParams.id}, function(plant) { // $stateParams is an object containing keys and values in the url -- here the object's id key is selected from the url so that the value, i.e. the id, of the plant being edited can be used to retrieve that plant's data from the database via the API service
            $scope.plant = plant; // puts the plant's data on the scope so that it already displays on the plant-update form in the view 
        });

        $scope.save = function() {
            $scope.plant.$save({ // saving the plant data that has been updatted in the plant-update form in the view
                id: $scope.plant._id,
                guid: $scope.plant.guid,
                price: $scope.plant.price,
                picture: $scope.plant.picture,
                thumbnail: $scope.plant.thumbnail,
                inventory: $scope.plant.inventory,
                name: $scope.plant.name,
                type: $scope.plant.type,
                family: $scope.plant.family,
                foliage: $scope.plant.foliage,
                anountOfSun: $scope.plant.amountOfSun,
                description: $scope.plant.description
            }, updateSuccess); // call the updateSuccess callback function located above
        };

        $scope.delete = function() {
            $scope.plant.$delete({ // deletes all the plant's data, removing it from the database
                id: $scope.plant._id,
                guid: $scope.plant.guid,
                price: $scope.plant.price,
                picture: $scope.plant.picture,
                thumbnail: $scope.plant.thumbnail,
                inventory: $scope.plant.inventory,
                name: $scope.plant.name,
                type: $scope.plant.type,
                family: $scope.plant.family,
                foliage: $scope.plant.foliage,
                anountOfSun: $scope.plant.amountOfSun,
                description: $scope.plant.description
            }, deleteSuccess); // call the deleteSuccess callback function located above
        };

    });

})(window.angular);
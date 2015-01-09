(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('PlantFormController', function($scope, API, $stateParams){

		function updateSuccess() {
            $scope.alert = {
                type: 'success',
                message: 'You have successfully updated the plant.'
            };
        }

        function deleteSuccess() {
        	$scope.alert = {
        		type: 'success',
        		message: 'You have successfully deleted the plant.'
        	};
        }

        API.plant.get({id: $stateParams.id}, function(plant) {
            $scope.plant = plant;
        });

        $scope.save = function() {
            $scope.plant.$save({
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
            }, updateSuccess);
        };

        $scope.delete = function() {
            $scope.plant.$delete({
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
            }, deleteSuccess);
        };

    });

})(window.angular);
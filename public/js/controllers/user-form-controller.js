(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('UserFormController', function($scope, API, $stateParams){

		function updateSuccess() {
            $scope.alert = {
                type: 'success',
                message: 'You have successfully updated the user.'
            };
        }

        function deleteSuccess() {
        	$scope.alert = {
        		type: 'success',
        		message: 'You have successfully deleted the user.'
        	};
        }

        API.user.get({id: $stateParams.id}, function(user) { // grabs the user's id from the url via the $stateParams service and then uses that id to get that user's data from the database via the API service
            $scope.user = user; // sets the user on the scope to the user with the id grabbed from the url -- so that now the user-form will display the user's information
        });

        $scope.save = function() {
            $scope.user.$save({ // saving the user data that has been updatted in the user-form
                id: $scope.user._id,
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                email: $scope.user.email,
                isAdmin: $scope.user.isAdmin,
                isActive: $scope.user.isActive
            }, updateSuccess);
        };

        $scope.delete = function() {
            $scope.user.$delete({ // deleting all the user data from the database
                id: $scope.user._id,
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                email: $scope.user.email,
                isAdmin: $scope.user.isAdmin,
                isActive: $scope.user.isActive
            }, deleteSuccess);
        };

    });

})(window.angular);
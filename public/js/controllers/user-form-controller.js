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

        API.user.get({id: $stateParams.id}, function(user) {
            $scope.user = user;
        });

        $scope.save = function() {
            $scope.user.$save({
                id: $scope.user._id,
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                email: $scope.user.email,
                isAdmin: $scope.user.isAdmin,
                isActive: $scope.user.isActive
            }, updateSuccess);
        };

        $scope.delete = function() {
            $scope.user.$delete({
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
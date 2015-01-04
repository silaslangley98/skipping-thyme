(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('LoginController', function($scope, $state, $timeout, AuthService){

		function successCallback() {
            $scope.alert = {
                type: 'success',
                message: 'You have successfully logged in.'
            };

            $timeout(function() {

                $state.go('home');

                $scope.alert = undefined;

            }, 3000);
        }

        function errorCallback() {
            $scope.alert = {
                type: 'danger',
                message: 'Invalid username and/or password'
            };

            $timeout(function() {
                $scope.alert = undefined;

            }, 3000);
        }

        $scope.login = function() {

            AuthService.login({
                email: $scope.email,
                password: $scope.password
            }, successCallback, errorCallback);

        };

    });
    
})(window.angular);

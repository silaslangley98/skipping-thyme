(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('SignUpController', function($scope, $state, $timeout, AuthService){
		function successCallback() {
            $scope.alert = {
                type: 'success',
                message: 'Your account has been created.'
            };

            $timeout(function() {

                $state.go('login');

                $scope.alert = undefined;

            }, 3000);
        }

        function errorCallback() {
            $scope.alert = {
                type: 'danger',
                message: 'There was an error creating your account. Please try again.'
            };

            $timeout(function() {
                $scope.alert = undefined;

            }, 3000);
        }

        $scope.signup = function() {

            AuthService.signup({
                email   : $scope.email,
                password: $scope.password
            }, successCallback, errorCallback);
        };
		
	});

})(window.angular);
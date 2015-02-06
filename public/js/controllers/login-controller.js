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

        $scope.login = function() { // make the Auth Service login function available to the scope and pass in the email and password entered on the scope to the Auth Service login function

            AuthService.login({
                email: $scope.email,
                password: $scope.password
            }, successCallback, errorCallback); // call the success or the error callback functions above when the login function is finished executing

        };

    });
    
})(window.angular);

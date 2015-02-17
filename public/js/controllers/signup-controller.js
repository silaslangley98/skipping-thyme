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

                $state.go('login'); // on success, goes to the login view after three seconds

                $scope.alert = undefined; // removes the success message after 3 seconds

            }, 3000);
        }

        function errorCallback() {
            $scope.alert = {
                type: 'danger',
                message: 'There was an error creating your account. Please try again.'
            };

            $timeout(function() {
                $scope.alert = undefined; // removes the error message after 3 seconds

            }, 3000);
        }

        $scope.signup = function() { // makes the signup function available to the scope
            AuthService.signup({ // sends the email and the password inputted on the signup form to the AuthService which will send it to the database
                email   : $scope.email,
                password: $scope.password
            }, successCallback, errorCallback);
        };
		
	});

})(window.angular);
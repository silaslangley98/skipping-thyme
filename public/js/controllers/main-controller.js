(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('MainController', function($scope, $state, $timeout, AuthService){
        
        function successCallback() {

            $state.go('login');

            $scope.alert = {
                type: 'success',
                message: 'You have been logged out.'
            };

            $timeout(function() {
                $scope.alert = undefined;

            }, 3000);
        }

        $scope.logout = function() {
            AuthService.logout(successCallback);
        };
    });
    
})(window.angular);

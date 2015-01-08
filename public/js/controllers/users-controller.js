(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('UsersController', function($scope, API){

		$scope.users = API.user.query();

	});

})(window.angular);
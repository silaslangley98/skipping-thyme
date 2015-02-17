(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('UsersController', function($scope, API){

		$scope.users = API.user.query(); // gets all the users data from '/api/admin/users/:id' via the API service and assigns it to 'users' on the scope

	});

})(window.angular);
(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('API', function($http, $resource){

		return { // $resource() creates a $resource class representation that provides five CRUD methods that can be used to interact with the RESTful backend at the url endpoint that is passed in as a parameter -- these methods are now available to controllers that inject the API service as a dependency

            plants: $resource('/api/plants'),

            plant: $resource('/api/admin/plants/:id'),

            addPlant: $resource('/api/admin/add-plant'),

            user: $resource('/api/admin/users/:id'),

            register: $resource('/api/register'),

            login: $resource('/api/login'),

            logout: $resource('/api/logout')
        };

    });
 
})(window.angular);

(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('API', function($http, $resource){

		return {

            plants: $resource('/api/plants'),

            plant: $resource('/api/plants/:id'),

            user: $resource('/api/users/:id'),

            register: $resource('/api/register'),

            login: $resource('/api/login'),

            logout: $resource('/api/logout')
        };

    });
 
})(window.angular);

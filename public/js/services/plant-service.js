(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('PlantService', function($http, API){

		/*return {

			getPlants: function(){
				
				return $http.get('/api/plants');

			}
		} */

		return API.plants;

	});
 
})(window.angular);

(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('PlantService', function($http){

		return {
			getPlants: function(){
				
				return $http.get('/api/plants');

			}
		}

	});
 
})(window.angular);

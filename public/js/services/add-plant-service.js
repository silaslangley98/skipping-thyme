(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('AddPlantService', function(API){

		return {

			addPlant: function(plant, success, error) {
                return API.addPlant.save(plant).$promise.then(success, error);
            }
		}

	});
 
})(window.angular);

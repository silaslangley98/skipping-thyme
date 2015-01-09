(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('addPlantButton', function(){
		return {

			scope: {				
				plant: "="
			},

			restrict: 'E',
			replace: true,
			templateUrl: 'templates/add-plant-button.html',
			link: function(scope, elem, attrs) {
 				
			}

		};
	});

})(window.angular);
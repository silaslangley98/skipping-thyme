(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('editPlantButton', function(){
		return {

			scope: {				
				plant: "="
			},

			restrict: 'E',
			replace: true,
			templateUrl: 'templates/edit-plant-button.html',
			link: function(scope, elem, attrs) {
 				
			}

		};
	});

})(window.angular);
(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('productDetailsButton', function(){
		return {

			scope: {
				plant: "="
			},

			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-details-button.html',
			link: function(scope, elem, attrs) {
 
			}

		};
	});

})(window.angular);

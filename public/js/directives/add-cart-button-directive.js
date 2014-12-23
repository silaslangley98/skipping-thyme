(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('addCartButton', function(CartService){
		return {

			scope: {
				plant: "="
			},

			restrict: 'E',
			replace: true,
			templateUrl: 'templates/add-cart-button.html',
			link: function(scope, elem, attrs) {
 
 				scope.addItem = CartService.addItem;
 				
			}

		};
	});

})(window.angular);

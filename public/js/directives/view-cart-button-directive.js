(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('viewCartButton', function(CartService){
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/view-cart-button.html',
			link: function(scope, elem, attrs) {
 				scope.getItemCount = CartService.getItemCount;
			}

		};
	});

})(window.angular);

(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('addCartButton', function(CartService){
		return {

			scope: {
				plant: "=" // make it so that the 'plant' argument passed into the addItem function in the add-cart-button-template is passed into the addItem function in the CartService
			},

			restrict: 'E', // restrict the custom directive to being used as an element
			replace: true,
			templateUrl: 'templates/add-cart-button.html',
			link: function(scope, elem, attrs) {
 
 				scope.addItem = CartService.addItem; // makes it so that clicking the submit button in the add-cart-button template will call the addItem function in the CartService
 				
			}

		};
	});

})(window.angular);

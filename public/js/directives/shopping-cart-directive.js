(function(angular) {
	"use strict";
 
	var app = angular.module('gardensApp');
 
	// Inject in the CartService
	app.directive('shoppingCart', function(CartService) {
 
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			controller: function ($scope, CartService) {

				$scope.items = CartService.getItems();
 
 				$scope.getItemCount = CartService.getItemCount;

 				$scope.removeItem = CartService.removeItem;

 				$scope.cartTotal = CartService.getCartTotal;

 				$scope.emptyCart = CartService.emptyCart;

 				$scope.resetCart = function () {
				    $scope.items = CartService.getItems();
				};
			},
			templateUrl: 'templates/cart-template.html',
			link: function(scope, elem, attr) {			
			}
		};
	});
 
})(window.angular);
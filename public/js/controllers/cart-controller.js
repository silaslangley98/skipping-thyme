(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('CartController', function($scope, CartService){

		$scope.items = CartService.getItems();
 
		$scope.getItemCount = CartService.getItemCount;

		$scope.removeItem = CartService.removeItem;

		$scope.cartTotal = CartService.getCartTotal;

		$scope.emptyCart = CartService.emptyCart;

		$scope.resetCart = function () {
		    $scope.items = CartService.getItems();
		};

	});

})(window.angular);
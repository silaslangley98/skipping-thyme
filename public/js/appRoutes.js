(function(angular) {
	"use strict";

	var app = angular.module('gardensApp');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				controller: "HomeController",
				templateUrl: "views/home.html"
			})

			.state('cart', {
				url: '/cart',
				controller: "CartController",			
				templateUrl: "templates/cart-template.html"
			});

	});
	
})(window.angular);
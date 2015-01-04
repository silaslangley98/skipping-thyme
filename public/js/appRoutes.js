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
				templateUrl: "views/cart-view.html"
			})

			.state('plant', {
                url: '/plant/:id',
                controller: 'PlantDetailController',
                templateUrl: 'views/detail.html'
            })

            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'views/login.html'
            });

	});
	
})(window.angular);
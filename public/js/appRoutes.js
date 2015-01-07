(function(angular) {
	"use strict";

	var app = angular.module('gardensApp');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController',
				templateUrl: 'views/home.html'
			})

			.state('cart', {
				url: '/cart',
				controller: 'CartController',			
				templateUrl: 'views/cart-view.html'
			})

			.state('about', {
				url: '/about',
				controller: 'AboutController',
				templateUrl: 'views/about.html'
			})

			.state('contact', {
				url: '/contact',
				controller: 'ContactController',
				templateUrl: 'views/contact.html'
			})

			.state('plant', {
                url: '/plant/:id',
                controller: 'PlantDetailController',
                templateUrl: 'views/detail.html'
            })

            .state('signup', {
                url: '/signup',
                controller: 'SignUpController',
                templateUrl: 'views/signup.html'
            })

            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'views/login.html'
            });

	});
	
})(window.angular);
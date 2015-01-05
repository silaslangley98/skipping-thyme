(function(angular) {
	"use strict";

	var app = angular.module('gardensApp', ['ngResource', 'ngCookies', 'ngMessages', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps']);

	app.config(function(uiGmapGoogleMapApiProvider) {
	    uiGmapGoogleMapApiProvider.configure({
	        //    key: 'your api key',
	        v: '3.17',
	        libraries: 'weather,geometry,visualization'
	    });
	});

})(window.angular);
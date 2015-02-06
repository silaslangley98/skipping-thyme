(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('WeatherController', function($scope, WeatherService){

		(function getTemp(){ // the function is immediately invoked so that it immediately calls the weather data rather than waiting for the 2000000 milliseconds in the setTimeout below
			$scope.weather = WeatherService.getWeather(); // calls the getWeather function in the WeatherService and assigns the result to the weather object on the scope in index.html
			setTimeout(getTemp, 2000000); // grab the weather data every 2000000 milliseconds
		})();

	});

})(window.angular);
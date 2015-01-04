(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('WeatherController', function($scope, WeatherService){

		(function getTemp(){
			$scope.weather = WeatherService.getWeather();
			setTimeout(getTemp, 2000000);
		})();

	});

})(window.angular);
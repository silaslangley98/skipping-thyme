 (function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('WeatherService', function($http){

		return {

			getWeather: function() {
				var weather = {temp: {}, clouds: null, rain: null};
				var city = "fresno,us";
				var url1 = "http://api.openweathermap.org/data/2.5/weather?q=";
				var url2 = "&units=imperial&callback=JSON_CALLBACK";
				var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
				$http({
						method: 'JSONP',
						url: url1 + city + url2
						//  "http://api.openweathermap.org/data/2.5/weather?q=fresno,us&units=imperial&callback=JSON_CALLBACK"						
					}).success(function(data) {
						weather.temp.current = data.main.temp;
						weather.temp.min = data.main.temp_min;
						weather.temp.max = data.main.temp_max;
					});

				$http({
						method: 'JSONP',
						url: forecastUrl + city + url2
					}).success(function(data) {
						console.log(data);
						weather.temp.high = data.list[0].temp.max;
						weather.temp.low = data.list[0].temp.min;
						console.log(weather.temp.high);
					});

				return weather;
			}

		};
		
    });
 
})(window.angular);


 (function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('WeatherService', function($http){

		return {

			getWeather: function() {
				var weather     = {temp: {}, description: null, icon: null};
				var city_id     = "5350964"; // " id for fresno.us"
				var url1        = "http://api.openweathermap.org/data/2.5/";
				var url2        = "&units=imperial&callback=JSON_CALLBACK&APPID=";				
				var API_key     = "7e77d9dbd50e905463e578dfff57f079";

				$http({
						method : 'JSONP',
						url    : url1 + "weather?id=" + city_id + url2 + API_key					
					}).success(function(data) {
						weather.temp.current = data.main.temp;
						weather.description  = data.weather[0].description;
						weather.location     = data.name;
					});

				$http({
						method : 'JSONP',
						url    : url1 + "forecast/daily?id=" + city_id + url2 + API_key
					}).success(function(data) {
						weather.temp.high = data.list[0].temp.max;
						weather.temp.low  = data.list[0].temp.min;
					});

				return weather;
			}

		};
		
    });
 
})(window.angular);

(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('ContactController', function($scope, uiGmapGoogleMapApi){

        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = { center: { latitude: 36.736331, longitude: -119.793063}, zoom: 17};
        });

    });

})(window.angular);
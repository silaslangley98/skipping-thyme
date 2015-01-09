(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('editUserButton', function(){
		return {

			scope: {				
				user: "="
			},

			restrict: 'E',
			replace: true,
			templateUrl: 'templates/edit-user-button.html',
			link: function(scope, elem, attrs) {
 				
			}

		};
	});

})(window.angular);
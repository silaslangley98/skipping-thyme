(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('ContactController', function($scope, uiGmapGoogleMapApi){

        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = { center: { latitude: 36.736331, longitude: -119.793063}, zoom: 17};
        }); // Makes the map available to the scope, setting the latitude and longitude where the map should be centered and how much it should be zoomed in

        // SENDING AND RECEIVING CHAT MESSAGES
        var socket = io();
        var messages = []; // creates empty messages array

        $scope.send = function() {
        	socket.emit('chat message', $scope.msg); // sends the chat message
		    $scope.msg = ""; // clears the inputted chat message on the scope
		    return false;
        }

        socket.on('chat message', function(msg){           
		    messages.push(msg); // adds the incoming chat message to the messages array
            $scope.$apply(function(){
              $scope.messages = messages; // use $apply so that the messages array on the scope is updated to include the incoming chat message, thus allowing the incoming message to be immediately displayed
            });
		});

    });

})(window.angular);
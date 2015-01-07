(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('AuthService', function(API, $rootScope, $cookieStore){

        $rootScope.currentUser = $cookieStore.get('user');

        return {

            login: function(user, success, error) {
                
                return API.login.save(user)
                    .$promise
                    .then(
                        function(data) {
                            console.log(user);
                            console.log(data);
                            $rootScope.currentUser = data;
                            success();
                        },
                        error
                    );
            },

            signup: function(user, success, error) {
                return API.register.save(user).$promise.then(success, error);
            },

            logout: function(success) {
                return API.logout.get()
                    .$promise
                    .then(function() {

                        $rootScope.currentUser = null;
                        $cookieStore.remove('user');

                        success();
                    });
            }
        };

    });
 
})(window.angular);
(function(angular){
    "use strict";
    var app = angular.module('gardensApp');

    app.directive('miniCart', function(CartService) {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/mini-cart.html',
            link: function(scope) {

                CartService.getItems();

                scope.getCartTotal = function() {
                    return CartService.getCartTotal();
                };

                scope.getItemCount = function() {e
                    return CartService.getItemCount();
                };
            }

        };
    });

})(window.angular);
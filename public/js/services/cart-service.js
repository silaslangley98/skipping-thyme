(function(angular) {
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('CartService', function() {
 
		var items = {};
		var cartToggle = false;
 
		return {

			getItems: function() {
				console.log(items);
                return items;
			},

			addItem: function(item) {
                if(!items[item.guid]) {
                	
                    item.quantity = 1;
                    items[item.guid] = item;
                    console.log(items);
                  
                } else {
                    items[item.guid].quantity += 1;
                    console.log(items[item.guid].quantity);
                }
			},
 
			removeItem: function(item_id) {
				
                delete items[item_id];
               
			},
 
			emptyCart: function() {
				
                items = {};
                
			},
 
			getItemCount: function() {

                var total = 0;
                angular.forEach(items, function(item) {
                    total += parseInt(item.quantity);
                });
                return total;
			},

			getCartTotal: function() {
				
                var total = 0;
                angular.forEach(items, function(item) {
                   total += parseInt(isNaN(item.quantity) ? 0 : item.quantity) * parseFloat(item.price);
                });
                return total;
			},

		};
 
	});
 
})(window.angular);
 
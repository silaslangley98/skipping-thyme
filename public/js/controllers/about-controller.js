(function(angular){
  'use strict';
  
  var app = angular.module('gardensApp');

  app.controller('AboutController', function($scope){
      $scope.myInterval = 5000;
      var slides = $scope.slides = [
        {
            image: 'images/floral_assembly.JPG'
        },
        {
            image: 'images/city_garden.jpg'
        },
        {
            image: 'images/flower_garden_resized.jpg'
        },
        {
            image: 'images/herb_garden_resized.jpg'
        },
        {
            image: 'images/irises.JPG'
        },
        {
            image: 'images/fenced_garden.JPG'
        }
      ];
    });
    
})(window.angular);

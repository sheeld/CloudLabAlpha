(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('TrendingController', TrendingController);
    
//    TrendingController.$inject = ['api'];
    
    function TrendingController(api) {
      var vm = this;
      
      // api.getRestaurants()
      //   .then(function(data) {
      //     vm.restaurants = data;
      //   });
    }
}());
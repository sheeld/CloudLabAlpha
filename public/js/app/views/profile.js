(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('ProfileController', ProfileController);
    
 //   ProfileController.$inject = ['$scope', '$route'];
    
    function ProfileController($scope, $route) {
      var vm = this;
      
    //   api.getRestaurants()
    //     .then(function(data) {
    //       vm.profile = data;
    //     });
    }
    
}());
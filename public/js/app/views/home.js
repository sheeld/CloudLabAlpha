(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = ['$scope', '$route'];
    
    function HomeController($scope, $route) {
      var vm = this;
      
      project.getProjects()
        .then(function(data) {
          vm.home = data;
        });
    }
}());
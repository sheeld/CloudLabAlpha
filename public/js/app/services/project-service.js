(function() {
  'use strict';
  
  angular
    .module('app')
    .factory('project', projectFactory);
    
  projectFactory.$inject = ['$http'];
  
  function projectFactory($http) {
    return {
      addProject: addProject,
      getProjects: getProjects
    };
    
    function addProject() {
      return $http.get('/projects/create')
        .then(function(response) {
          return response.data;
        });
    }
    
    function getProjects() {
      return $http.get('/projects/getByDate')
        .then(function(response) {
          return response.data;
        });
    }
  }
}());
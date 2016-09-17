(function() {
  'use strict';

  angular
    .module('app')
    .config(config)

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/app/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        activetab: 'HomeController'
      })
      .when('/projects', {
        templateUrl: '/js/app/views/recorder/project.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      })
      .when('/trends', {
        templateUrl: '/js/app/views/recorder/index.1.html',
        controller: 'TrendsController',
        controllerAs: 'vm'
      })
      .when('/profile', {
        templateUrl: '/js/app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      })
      // .when('/menu/:restId', {
      //   templateUrl: '/js/app/menu/menu.html',
      //   controller: 'MenuController',
      //   controllerAs: 'vm'
      // });
  }
}());
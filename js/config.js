;(function(){
	'use strict';

	angular.module('snkrApp', [
			'ngRoute',
		 	'mgcrea.ngStrap',
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'firebase'
	])
		.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'views/snkrland.html',
				controller: 'PostController',
				controllerAs: 'postCtrl'
			})
			.when('/new', {
				templateUrl: 'views/form.html',
				controller: 'ShoeController',
				controllerAs: 'shoeCtrl'
			})
			.when('/collection', {
				templateUrl: 'views/table.html',
				controller: 'ShoeController',
				controllerAs: 'shoeCtrl'
			})
			.when('/register', {
				templateUrl: 'views/register.html',
				controller: 'AuthController',
				controllerAs: 'authCtrl'
			})
			.when('/:id', {
				templateUrl: 'views/show.html',
				controller: 'ShowController',
				controllerAs: 'show'
			})
			.when('/:id/edit', {
				templateUrl: 'views/form.html',
				controller: 'EditController',
				controllerAs: 'shoeCtrl'
			})
			.otherwise({redirectTo: '/'});
		})
}());

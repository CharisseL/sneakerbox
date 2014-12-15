;(function(){
	'use strict';

	angular.module('snkrApp')
		.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'views/shoelist.html',
				controller: 'ShoeController',
				controllerAs: 'shoelist'
			})
			.when('/new', {
				templateUrl: 'views/form.html',
				controller: 'ShoeController',
				controllerAs: 'shoelist'
			})
			.when('/:id', {
				templateUrl: 'views/show.html',
				controller: 'ShowController',
				controllerAs: 'show'
			})
			.when('/:id/edit', {
				templateUrl: 'views/form.html',
				controller: 'EditController',
				controllerAs: 'edit'
			})
			.otherwise({redirectTo: '/'});
		})
}());

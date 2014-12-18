;(function(){
	'use strict';

	angular.module('snkrApp')
		.controller('ShowController', function($routeParams, sneakerFactory){
			var vm = this;
			var id = $routeParams.id;
			sneakerFactory.getShoe(id, function(data){
				vm.shoe = data;
			});
		})
		.controller('EditController', function($routeParams, sneakerFactory){
			var vm = this;
			var id = $routeParams.id;

			sneakerFactory.getShoe(id, function(data){
				vm.newShoe = data;
			});

			vm.addNewShoe = function(){
				sneakerFactory.createShoe(id, vm.newShoe);
			};


		})
		.controller('ShoeController', function($http, sneakerFactory){
			var vm = this;

			sneakerFactory.getAllShoes(function(data){
				vm.shoes = data;
			});

			vm.addNewShoe = function(){
				sneakerFactory.createShoe(vm.newShoe, function(data){
					vm.shoes = vm.shoes || {};
					vm.shoes[data.name] = vm.newShoe;
					vm.newShoe = _freshShoe();
				});
			};

			vm.removeShoe = function(shoeId){
				sneakerFactory.deleteShoe(shoeId, function(){
					delete vm.shoes[shoeId];
				});
			};
		})
		.controller('PostsCtrl', function ($http){
			$http.posts = [];
			$http.post = {url: 'http://', title: ''};

			$http.submitPost = function (){
				$http.posts.push($http.post);
				$http.post = {url: 'http://', title: ''};
			};
		});

	}());

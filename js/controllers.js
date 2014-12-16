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
				sneakerFactory.editShoe(id, vm.newShoe);
			};

			vm.sportOptions = sneakerFactory.sportOptions;

		})
		.controller('ShoeController', function($http, sneakerFactory){
			var vm = this;

			sneakerFactory.getAllShoes(function(data){
				vm.shoes = data;
			});

			vm.addNewShoe = function(){
				sneakerFactory.createShoe(vm.newShoe, function(data){
					vm.shoes[data.name] = vm.newShoe;
					vm.newShoe = _freshShoe();
				});
			};

			vm.removeShoe = function(shoeId){
				sneakerFactory.deleteShoe(shoeId, function(){
					delete vm.shoes[shoeId];
				});
			};

			vm.newShoe = _freshShoe();

			vm.sportOptions = sneakerFactory.sportOptions;

			function _freshShoe(){
				return{
					sport: 'basketball'
				};
			}

		});

	}());

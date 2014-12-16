;(function(){
	'use strict';

	angular.module('snkrApp')
		.factory('sneakerFactory', function($http, $location){

			function getShoe(id, cb){
				var url = 'https://sneakerbox.firebaseio.com/' + id + '.json';

				$http.get(url)
					.success(function(data){
						cb(data);
				})
				.error(function(err){
					console.log(err);
				});
			}

			function editShoe(id, shoelist){
				var url = 'https://sneakerbox.firebaseio.com/' + id + '.json';
				$http.put(url, shoelist)
					.success(function(data){
						$location.path('/');
					})
					.error(function(err){
						console.log(err);
					});
				}

			function getAllShoes(cb){
				$http.get('https://sneakerbox.firebaseio.com/.json')
					.success(function(data){
						cb(data);
					})
					.error(function(err){
						console.log(err);
					});
			}

			function createShoe(shoe, cb){
			 $http.post('https://sneakerbox.firebaseio.com/.json', shoe)
			 	.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				});
			}

			function deleteShoe(shoeId, cb){
				var url= 'https://sneakerbox.firebaseio.com/' + shoeId + '.json';
					$http.delete(url)
						.success(function(){
							cb();
						})
						.error(function(err){
							console.log(err);
						});
			}

			var sportOptions = {
				high: 'Basketball',
				medium: 'Crosstrainer',
				small : 'Running'
			};

			return {
				getShoe: getShoe,
				editShoe: editShoe,
				createShoe: createShoe,
				deleteShoe: deleteShoe,
				getAllShoes: getAllShoes,
				sportOptions: sportOptions
			};
		})
	}());


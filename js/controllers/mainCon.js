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
		.controller('ShoeController', function($scope, $filter, sneakerFactory){
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
			$scope.$on('$viewContentLoaded', function(){
				$( "#shoelist" ).sortable();
   	

			});
			$scope.shoes =[];
		})

		.controller('PostController', function ($scope) {
			$scope.posts = [];
			$scope.post = {title: '', url: 'http://'};

			$scope.submitPost = function (){
				$scope.posts.push($scope.post);
				$scope.post = {url: 'http://', title: ''};
			};
			
			$scope.deletePost = function(index) {
				$scope.posts.splice(index, 1);
			};
			
		})
	/*	.controller('UploadController', function($rootScope, $scope, $routeParams) {
			var vm = this,
					id = $routeParams.id;

			vm.imageUrl = 'https://sneakerbox-images.s3.amazonaws.com/' + $rootScope.user.uid + '/' + id + '.jpg';
		.controller('ChangePasswordController', function($scope, $location, authFactory)
				var vm = this;
				vm.changePassword = function(){
					authFactory.changePassword(vm.oldPassword, vm.newPassword, function(){
						$location.path('/logout');
						$scope.$apply();
					})
				};
			})*/
		.controller('LoginController', function($scope, $location){
			var vm = this;
			var ref = new Firebase('https://sneakerbox.firebaseio.com');

			vm.login = function(){
						console.log('HELP');
						ref.authWithPassword({
						email			: vm.email,
						password	: vm.password
					},
					function(error, authData) {
						if (error === null) {
							console.log("user logged in", authData);
							$location.path('/');
							$scope.$apply();
						} else {
							console.log("error creating user:", error);
						}
					});
			}
		})

		/*	vm.login = function() {
				authFactory.login(vm.email, vm.password, function(){
					$location.path('/collection');
					$scope.$apply();
				});
			};

			vm.register = function(){
				authFactory.register(vm.email, vm.password, function(){
					vm.login();
				});
			};

			vm.forgotPasswork = function(){
				authFactory.resetPassword(vm.email);
			};
		})
		.controller('LogoutController', function($scope, $location, authFactory){
			authFactory.logout(function(){
				$location.path('/login');
				$scope.$apply();
			});
		})

		/*.controller('AuthController', function($scope, $location, Auth, user) {
			if (user){
				$location.path('/');
			}
			$scope.register = function () {
				Auth.register($scope.user).then(function() {
					return Auth.login($scope.user).then(function() {
						$location.path('/');
					});
				});
			};
		});*/
	}());

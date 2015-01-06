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

			function editShoe(id, shoeCtrl){
				var url = 'https://sneakerbox.firebaseio.com/' + id + '.json';
				$http.put(url, shoeCtrl)
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
			
			return {
				getShoe: getShoe,
				editShoe: editShoe,
				createShoe: createShoe,
				deleteShoe: deleteShoe,
				getAllShoes: getAllShoes,
			};
		})
	/*	.factory('authFactory', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
			var factory = {},
					ref = new Firebase(FIREBASE_URL);

			$rootScope.user = ref.getAuth();

			factory.requireLogin = function () {
				if (!_isLoggedIn()) {
					$location.path('/login');
				} else if (_hasTemporaryPassword()) {
					$location.path('/changepassword');
				}
			};

			factory.disallowLogin = function(){
				if(_isLoggedIn()) {
					$location.path('/collection');
				}
			};

			function _isLoggedIn(){
				return ref.getAuth().password.isTemporaryPassword;
			}

			factory.changePassword = function(oldPass, newPass, cb){
				ref.changePassword({
					email				: ref.getAuth().password.email,
					oldPassword	: oldPass,
					newPassword	: newPass,
				}, function(error) {
					if (error === null) {
						console.log('Password changed');
						cb();
					} else {
						console.log('Error changing password:', error);
					}
				}
			);
		};

		factory.login = function(email, pass, cb){
			ref.authWithPassword({
				email			: email,
				password	: pass
			}, function(error, authData) {
				if(error === null) {
					console.log('User logged in', authData);
					$rootScope.user = authData;
					ref.child('users').child(authData.uid).child('authData').set(authData);
					cb();
				} else {
					console.log('Error logging in:' error);
					}
				}
			);
		};

		factory.logout = function(cb){
			ref.unauth(function(){
				$rootScope.user = null;
				cb();
			});
		};

		factory.register = function(email, pass, cb){
			ref.createUser({
				email			:	email,
				password	: pass
			}, function(error, authData) {
				if (error === null) {
					console.log('User created', authData);
					cb();
				} else {
					console.log('Error creating user:', error);
					}
				}
			);
		};

		factory.resetPassword = function(email){
			ref.resetPassword({
				email : email
			}, function(error) {
				if (error === null){
					console.log('password reset email sent');
				} else {
					console.log('error sending password reset email:', error);
					}
				}
			);
		};

		return factory;
		})*/
}());

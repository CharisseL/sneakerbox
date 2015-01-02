;(function(){
	'use strict';

	angular.module('snkrApp', ['ngRoute', 'mgcrea.ngStrap', 'angularFileUpload', 'firebase'])
		.constant('FIREBASE_URL', 'https://sneakerbox.firebaseio.com/');

}());

var HomeCtrl = require('./js/controllers/home-controller.js');

var angular = require('angular');
var app = angular.module('app', [require('angular-route'), require('angular-animate')]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl as home'
	})
	.otherwise(
		{
			redirectTo: '/'
		}
		);
}]);

app.controller('HomeCtrl', ['$scope', HomeCtrl]);
var app = angular.module('bandRoutesApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/form.html',
		controller: 'formCtrl'
	});

	$routeProvider.when('/display', {
		templateUrl: 'partials/display.html',
		controller: 'displayController'
  });

});

app.controller('formCtrl', function($scope, bandSelector){
  $scope.submit = function(rockStar, coverBand){
  	bandSelector.assignName(rockStar, coverBand);
  };
    
});




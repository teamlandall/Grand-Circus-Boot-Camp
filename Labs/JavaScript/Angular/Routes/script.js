var app = angular.module('routes', ['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'dog.html',
			controller: 'routeCtrl'
		});

		$routeProvider.when('/cat', {
      templateUrl: 'cat.html',
      controller: 'routeCtrl2'
    });

    $routeProvider.when('/lizard', {
			templateUrl: 'lizard.html',
			controller: 'routeCtrl'
		});

    $routeProvider.otherwise( {
      templateUrl: 'fail.html',
      controller: 'failRoute'
    });
});

	app.controller('routeCtrl', function(){

});

  app.controller('routeCtrl2', function(){

});

  app.controller('failRoute', function(){

});

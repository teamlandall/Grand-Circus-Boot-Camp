var app = angular.module('ajaxCall', ['ngRoute']);

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

app.controller('formCtrl', function($scope){
  $scope.test="Testing scope.";
    
});

app.controller('displayController', ['apiCall', '$scope', function(apiCall, $scope){


	  apiCall.
	  	then(function(response){
	  		console.log(response)
	  		$scope.lyric = response.data;
	  	});

	
	  // The above moves the get request line to the service and returns it. 
	  // both work the same way. 
	  
	  // $http.get('https://twlaas.herokuapp.com/').
	  // 	then(function(response){
	  // 		$scope.details = response.data;
	  // 		console.log(response);
	  // });

}]);


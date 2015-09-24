var app = angular.module('ajaxCall');

app.factory('apiCall', ['$http', function ($http){
	
	return $http.get('https://twlaas.herokuapp.com/');

}]);

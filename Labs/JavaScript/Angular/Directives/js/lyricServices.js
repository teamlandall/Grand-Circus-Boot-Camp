var app = angular.module('pictureBoxApp');

app.factory('apiCall', ['$http', function ($http){
	
	return $http.get('https://twlaas.herokuapp.com/');

}]);

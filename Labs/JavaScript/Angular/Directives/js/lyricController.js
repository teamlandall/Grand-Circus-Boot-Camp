var app = angular.module('pictureBoxApp');

app.controller('lyricController', ['apiCall', '$scope', function(apiCall, $scope){

	  apiCall.
	  	then(function(response){
	  		$scope.lyric = response.data;
	  	});
}]);
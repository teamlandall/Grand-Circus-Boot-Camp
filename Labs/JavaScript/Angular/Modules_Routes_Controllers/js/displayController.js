var app = angular.module('bandRoutesApp');

app.controller('displayController',['$scope', 'bandSelector', function($scope, bandSelector){
  
  $scope.greeting="Meet the Band";

  $scope.theBand = bandSelector.showName();


}]);


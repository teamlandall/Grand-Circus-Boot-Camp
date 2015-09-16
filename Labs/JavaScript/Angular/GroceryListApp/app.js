

var app = angular.module('GroceryList', []);

  app.controller('ListController', function($scope){
  	$scope.Groceries = [
  		{ item: "Bacon", price: 5.99 },
  		{ item: "Flour", price: 3.49 },
      { item: "Sugar", price: 2.75 },
      { item: "Maple Syrup", price: 12.49 },
      { item: "Butter", price: 3.99 },
      { item: "Milk", price: 3.69 },
      { item: "Eggs", price: 2.99 },
  	];

    $scope.addItem = function(newItem) {
      $scope.Groceries.push(newItem);
      $scope.newItem = {};
    };

    $scope.total = function(){
      var total = 0;
      angular.forEach($scope.Groceries, function(item){
        total += item.price;
      });
    return total;
  }
  
});


var app = angular.module('AllmanBros', []);

app.controller('AllmanBrosCtrl', function($scope){
	$scope.Allmans = [
		{
      name: "Duane Allman",
      instrument: "Guitar",
      active: false
    },
		{
      name: "Gregg Allman",
      instrument: "Guitar",
      active: false
    },
    {
      name: "Dickey Betts",
      instrument: "Triangle",
      active: true
    },
    {
      name: "Jai Johanson",
      instrument: "Tuba",
      active: true
    },
    {
		  name: "Berry Oakley",
      instrument: "Drums",
      active: false,
    },
		{
      name: "Butch Trucks",
      instrument: "Keyboard",
      active: true,
    },
		{
      name: "Chuck Leavell",
      instrument: "Vocals",
      active: false,
    },
    {
		  name: "Lamar Williams",
      instrument: "Saxaphone",
      active: true,
    },
	];

});


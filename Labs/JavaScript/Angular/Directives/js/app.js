var app = angular.module('pictureBoxApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'partials/pictures.html',
		controller: 'pictureController'
	});
	
	$routeProvider.when('/lyric', {
		templateUrl: 'partials/lyric.html',
		controller: 'lyricController'
  });

});
  

app.controller('pictureController', function($scope){
	$scope.pictures = [
   	  { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
  	  { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
      { img: "img/TomWaits.jpg", caption: "This is Tom. He writes music." },
  	];
});

	






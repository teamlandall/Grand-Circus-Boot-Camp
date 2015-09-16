
var app = angular.module('RandomWords', []);

	app.controller('WordController', function($scope){

	$scope.Words = ["Cervantes", "belittles", "his", "novel", "and", "denies", 
    "that", "Don", "Quixote", "an", "invented", "character", "claiming", 
     "is", "merely", "rewriting", "history", "He", "reports", "likely", "fictional", 
     "account", "of", "conversation", "with", "friend", "who", "reassures", "can", 
     "root beer", "without", "conventional", "embellishments", "high five", "as", 
     "sonnets", "ballads", "references", "fist bump", "famous", "authors", "Latin", 
     "phrases", "humorously", "suggests", "sword", "such", "adornments", "be", "added", 
     "to", "book", "after", "snuggle", "completion", "accepts", "snacks", "advice", 
     "horse", "urges", "us", "enjoy", "snickers", "its", "simplicity"];
     // 68 words

  $scope.Phrase =["Believe in yourself.", "Go for it!", "Lets just dance.", 
  	"Have a good one!", "Try something new.", "Have a nice day!", "Nice shirt!", 
  	"Have fun at the park!", "Just do it!"];

  //initialize all variables that append to the webpage.
  $scope.eachWord = "";
  $scope.singleWord = "";
  $scope.multipleWords = "";
  $scope.decoratedWord = "";
  $scope.decoratedPhrase = "";

  //selects 1 word from Words[] at random.
		$scope.oneWord = function(){
			var randomNumber = Math.floor(Math.random() * (67-1) + 1);
			$scope.singleWord += " " + ($scope.Words[randomNumber]);
   	};

   //selects 1 phrase from Phrase[].
		$scope.moreWords = function(){
			var randomNumber1 = Math.floor(Math.random() * (8-1) + 1);
	    $scope.multipleWords += " " + $scope.Phrase[randomNumber1];
		};

	//decorates a random word from Words[]
		$scope.decoration = function(){
			var randomNumber = Math.floor(Math.random() * (67-1) + 1);
			$scope.decoratedWord += " " + ($scope.Words[randomNumber]);
		};

	//decorates a phrase from Phrase[]
		$scope.moreWordsDecorations = function(){
			var randomNumber = Math.floor(Math.random() * (8-1) + 1);
			$scope.decoratedPhrase += " " + ($scope.Phrase[randomNumber]);
		};

	// function that generates random phrase from Words[].
		$scope.phraseFromWords = function(){
			// generates the start and end slice for the Words[].
			var ranNum1 = Math.floor(Math.random() * (34-1) + 1);
			var ranNum2 = Math.floor(Math.random() * (67-35) + 35);
			// generates the start and end slice for newArray[].
			var ranNum3 = Math.floor(Math.random() * (5-1) + 1);
			var ranNum4 = Math.floor(Math.random() * (12-6) + 6);
			var newArray = [];
			
			
			newArray = $scope.Words.slice(ranNum1, ranNum2);
			newArray = newArray.slice(ranNum3, ranNum4);
			for(i=0; i<newArray.length; i++){
				console.log(newArray[i]);
				$scope.eachWord += " " + newArray[i];
			}
		};

	});





var app = angular.module('bandRoutesApp');

app.factory('bandSelector', function(){

		var rockStar = '';
		var coverBand = '';


	function setBandMember(rockStarEx, coverBandEx){
		console.log("in setBandMember");
		 rockStar = rockStarEx;
	  	coverBand = coverBandEx;
	}

	function getBandMember(){
		return  {
			externalName: rockStar,
			externalBand: coverBand
		}
	}

	return {
		assignName: setBandMember,
		showName: getBandMember
	}

});
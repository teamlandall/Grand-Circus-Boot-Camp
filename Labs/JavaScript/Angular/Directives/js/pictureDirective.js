var app = angular.module('pictureBoxApp');

app.directive('repeatPicture', function(){
	return{
		restrict: "E",
		template: '<div class="col-xs-4"><img src="{{contents.img}}"> <p id="caption"> {{contents.caption}} </p></div>',
		replace: false
	};
});

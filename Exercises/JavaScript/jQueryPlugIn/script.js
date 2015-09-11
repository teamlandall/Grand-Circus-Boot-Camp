$(document).ready(function(){

	$.backstretch("img/taylor_swift.jpg");

	 $("#getting-started")
   		.countdown("2015/09/12", function(event) {
     $(this).text(
       event.strftime('%D days %H:%M:%S')
     );
   });

});
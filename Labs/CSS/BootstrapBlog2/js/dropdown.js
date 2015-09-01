/* jQuery to make the dropdown menu work */

jQuery(document).ready(function(){

var $ = jQuery;

$('.dropdown-toggle').click(function() {

	if($('.dropdown-menu').css('display') == 'none'){
	$('.dropdown-menu').slideDown(250);
}
else {
	$('.dropdown-menu').slideUp(250);
}
})
})


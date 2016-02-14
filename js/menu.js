var trigger = $('#menu-trigger');

trigger.on('click', function(e) {
	$( "#menu" ).toggle('400');
	$("i",this).toggleClass("glyphicon-th glyphicon-remove")
}); 
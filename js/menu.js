var trigger = $('#menu-trigger');

trigger.on('click', function(e) {
	$( "#menu" ).toggle('400');
	$("i",this).toggleClass("glyphicon-th glyphicon-remove")
}); 




$("#gallery").on('click', function(event) {
	event.preventDefault();
	loadPage("slider.html");
});

//Ajax call to get the html page
function loadPage (page) {
	var dynamic = document.getElementById("dynamic");
	$('#dynamic').load(page + ' #myCarousel');	 
	$('#wrapper').hide('fast');
	dynamic.style.display = 'block';
	//$("#gallery").toggleClass("glyphicon-th glyphicon-remove");
}


$(document).on('click','#home', function(event) {
	event.preventDefault();
	var dynamic = document.getElementById("dynamic");
	var home = document.getElementById("home");
	$("#dynamic").hide("fast");
	$("#wrapper").show("slow");
});
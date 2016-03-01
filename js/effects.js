var modalBtn = $("modalTrigger");

modalBtn.on('click', function(event) {
	event.preventDefault();
	$("#myModal").fadeIn('1000');
});
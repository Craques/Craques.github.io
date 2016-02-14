/************************************************************************
*Creating a playlist from JSONp
*/
var afroBeat = [{title:"Shalewa", artist: "BYO"  , track: "../music/wedding.mp3"}, {title:"Wedding Day", artist: "BYO" , track: "../music/wedding.mp3"}];
/************************************************************************
*Initialize the playlist with afrobeat playlist 
*/
document.onload = createPlaylist(afroBeat);



function createPlaylist(data) {
	 var template = Handlebars.compile($('#template').html());
	 var temp = template(data);
	 //console.log(temp);
	 $('.playlist').append(temp);
}



$('.song').on('click', function(event) {
	event.preventDefault();
	var track = $(this).data('track');
	if (track) {
		console.log(track);
		mytrack.pause();
		mytrack.src = track;
		mytrack.onload = playOrPause();
	}
});

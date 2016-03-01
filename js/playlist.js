/************************************************************************
*Creating a playlist from JSONp
*/
var afroBeat = [{title:"Shalewa", artist: "BYO"  , track: "../music/wedding.mp3"}, {title:"Wedding Day", artist: "BYO" , track: "../music/wedding.mp3"}, {title:"Wedding Day", artist: "BYO" , track: "../music/wedding.mp3"}];
/************************************************************************
*Initialize the playlist with afrobeat playlist 
*/
document.onload = createPlaylist(afroBeat);
var albumArt = $("#current-track-image");


function createPlaylist(data) {
	 var template = Handlebars.compile($('#template').html());
	 var temp = template(data);
	 $('.playlist').append(temp);
}



$('.song').on('click', function(event) {
	var art = $(this).find('img').attr("src");
	albumArt.css('backgroundImage', "url(" + art +")"); //change the albumArt to current song
	event.preventDefault();
	var track = $(this).data('track');
	if (track) {
		mytrack.pause();
		mytrack.src = track;
		mytrack.onload = playOrPause();
	}
});

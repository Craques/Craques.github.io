var mytrack = document.getElementById("mytrack");
var playButton = document.getElementById("play");
var muteButton = document.getElementById("mute");
var duration = document.getElementById("fullDuration");
var currentTime = document.getElementById("currentTime");
var barSize = $("#defaultBar").width();
var bar = document.getElementById("defaultBar");
var progressBar = document.getElementById("progressBar");

console.log(barSize);
playButton.onclick = playOrPause;
muteButton.onclick = muteOrUnmute;
bar.onclick = progressBarTimer;

duration.innerHTML = mytrack.durationchange;


mytrack.ondurationchange = function () {
	 duration.innerHTML = displayTime(mytrack.duration);
}

function playOrPause() {
	if(!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		$('#play').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
		window.clearInterval(timer);
	}else{
		mytrack.play();
		$('#play').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
		timer = setInterval(updateTime, 500);
		
	}
}


function displayTime (t) {
	var minutes = parseInt(t/60);
	var seconds = parseInt(t % 60);
	if (seconds < 10) {
		seconds = "0" + seconds;
	};
	return minutes + ":" + seconds;
}

function updateTime () {
	 if(!mytrack.ended){
	 	currentTime.innerHTML = displayTime(mytrack.currentTime);
	 	var size = parseInt(mytrack.currentTime * barSize)/mytrack.duration;
	 	progressBar.style.width = size + "px";
	 	if (duration.innerHTML === undefined) {
	 		duration.innerHTML = displayTime(mytrack.duration);
	 	}
	 }else{
	 	currentTime.innerHTML = displayTime(0);
	 	$('#play').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
	 	progressBar.style.width = "0px"
	 	window.clearInterval(timer);
	 }
}


function muteOrUnmute(){
	if(mytrack.muted){
		mytrack.muted = false;
		$('#mute').find('.glyphicon').removeClass('glyphicon-volume-off').addClass('glyphicon-volume-up');
	}else{
		mytrack.muted = true;
		icon = $('#mute').find('.glyphicon').removeClass('glyphicon-volume-up').addClass('glyphicon-volume-off');
	}
}

function progressBarTimer (e) {
	 	var mouseX = e.pageX - bar.offsetLeft;
	 	var newTime = mouseX*mytrack.duration/barSize;
		mytrack.currentTime = newTime;
}



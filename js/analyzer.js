var audio = new Audio();
audio.src = "music/wedding.mp3";
audio.controls = true;
audio.autoplay = false;

var analyserCanvas, analyserCtx, source, context, fbc_array, bars, bar_x, bar_width, bar_height;

window.addEventListener("load", initMp3Player, false);

function  initMp3Player() {
	var context = new AudioContext();
	analyser = context.createAnalyser();
	analyserCanvas = document.getElementById('visualiser');
	analyserCtx = analyserCanvas.getContext('2d');
	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
	animateVisualiser();
}

function animateVisualiser() {
	 window.requestAnimationFrame(animateVisualiser);
	 fbc_array = new Uint8Array(analyser.frequencyBinCount);
	 analyser.getByteFrequencyData(fbc_array);
	 analyserCtx.clearRect(0, 0, canvas.width, canvas.height);
	 analyserCtx.fillStyle = '#eeeeee';
	 bars = 100;
	 for (var i = 0; i < bars; i++) {
	 	bars_x = i * 3;
	 	bars_width = 2;
	 	bars_height = -(fbc_array[i] / 2);
	 	analyserCtx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	 };

}


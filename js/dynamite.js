var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"), 
	image = new Image();
	image.src = "images/mixer.jpg" ;

function drawImage(image, canvas, ctx){
	image.onload = function(){
		ratio = image.height/image.width;
		ctx.beginPath();
    	ctx.drawImage(image, 0 , 0, image.width, image.height * ratio, 0, 0 , canvas.width, canvas.height )	
	}
};



drawImage(image, canvas, ctx);
/************************************************************************************************************************************************
	Designing the album art canvas, it will be dynamic and the image source will be in the data-image attribute of the canvas which will also be 
	updated dynamically

*************************************************************************************************************************************************
*/






var mySongs = [{title:"Shalewa", artist: "BYO"}];

console.log(mySongs[0].title);



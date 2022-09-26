canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
gcarwidth = 75;
gcarheight = 150;
greencar_x= 10;
greencar_y= 310;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	gcar_imgTag = new Image();
	gcar_imgTag.onload = uploadgreencar;
	gcar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(gcar_imgTag, greencar_x, greencar_y, gcarwidth,gcarheight)
}
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (greencar_y >= 0){
greencar_y=greencar_y-5;
uploadBackground();
uploadgreencar();
}
}

function down()
{
if (greencar_y<=600){
greencar_y=greencar_y+5
uploadBackground();
uploadgreencar();
}
}

function left()
{
	if (greencar_x<=800){
		greencar_x=greencar_x-5
		uploadBackground();
		uploadgreencar();
		}
}
function right()
{
	if (greencar_x>=0){
		greencar_x=greencar_x+5
		uploadBackground();
		uploadgreencar();
		}
}
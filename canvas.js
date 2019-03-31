var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var radius = 5;
var dragging = false;

var colorRed = "#ff0000";
var colorGreen = "#008000";
var colorYellow = "#ffff00";
var colorBlue = "#0000ff";

var color = colorRed;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2

var putPoint = function(e) {
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.strokeStyle = curColor;
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fillStyle = curColor;
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
}}

var engage = function(e) {
	dragging = true;
	putPoint(e);
}

var disengage = function() {
	dragging = false;
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

canvas.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key){
	if (key.keyCode == "66") {
		curColor = colorBlue;
	}
	if (key.keyCode == "71") {
		curColor = colorGreen;
	}
	if (key.keyCode == "82") {
		curColor = colorRed;
	}
	if (key.keyCode == "89") {
		curColor = colorYellow;	}

}

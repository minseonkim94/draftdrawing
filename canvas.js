var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var radius = 5;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2

var putPoint = function(e) {
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.strokestyle = #ff0000;
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
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
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);



var colorRed = "#ff0000";
var colorGreen = "#008000";
var colorYellow = "#ffff00";
var colorBlue = "#0000ff";

var curColor = colorRed;
var clickColor = new Array();

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
	
	context.strokeStyle = curColor;

}

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw(){
  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++)
  {
    context.beginPath();
    if(clickDrag[i] && i){
      contex.moveTo(clickX[i-1], clickY[i-1]);
    }else{
      context.moveTo(clickX[i]-1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.strokeStyle = curColor;
    context.stroke();
  }
}




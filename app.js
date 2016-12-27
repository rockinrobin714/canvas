//When user interacts, nothing happens

//When clicking on control list items, deselect sibling elements and select clicked
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown=false;

$(".controls").on("click", "li", function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
});
//When "New color" is clicked, show/hide color select
$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color","rgb("+r+","+g+","+b+")");
}
//When color sliders change, update new color span
$("input[type=range]").change(changeColor);
//When Add color is clicked, append new color to the control ul and select it
$("#addNewColor").click(function(){
  var $newColor = $("<li></li");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});
//On mouse event on canvas, draw lines
$canvas.mousedown(function(e){
  lastEvent=e;
  mouseDown=true;
}).mousemove(function(e){
  if (mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.strokeStyle=color;
    context.stroke();
    lastEvent=e;
  }
}).mouseup(function(){
  mouseDown=false
}).mouseleave(function(){
 $canvas.mouseup(); 
});

$("#thickness").on("input", function() {
    context.lineWidth = $("#thickness").val();
});

  context.lineCap = "round"; 





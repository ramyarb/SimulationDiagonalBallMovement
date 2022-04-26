//Set global variable that would contain the position, velocity and the html element "ball"
var ball=document.getElementById("ball" );
var ball1=document.getElementById("ball1" );
var ball2=document.getElementById("ball2" );
var velocity=10;//this var holds the velocity in which the ball shoulld move
var positionX=0;//this variable holds the x position of the ball
//write a function that can change the position of the html element "ball"
var reverse=false;

var positionY=0;
function moveBall() {
  //Move ball in X axis
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 200;
//move ball in Yaxis
// two fixed y-axis coordinates (you will use these variable in step 3)
  var Ymin = 0;
  var Ymax = 200;

  checkReverse(reverse);

 

if((positionX>=Xmax)||(positionX==Xmin)||(positionY>=Ymax)||(positionY==Ymin))
{
  reverse=!reverse;
}
console.log("xposition",positionX);
console.log("reverse",reverse);
ball.style.left=positionX+"px";
ball1.style.left=positionX+"px";
ball2.style.left=positionX+"px";

console.log("yposition",positionY);
console.log("reverse",reverse);
ball.style.top=positionY+"px";
ball1.style.top=positionY+"px";
ball2.style.top=positionY+"px";


}
function checkReverse(valReverse)
{
  if(valReverse)
 {
  //moving ball right to left
  positionX=positionX-velocity;
  positionY=positionY-velocity;
}
else
{
  //moving ball left to right
  positionX=positionX+velocity;
  positionY=positionY+velocity;
}
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);

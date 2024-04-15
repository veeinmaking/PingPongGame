document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball");
  let table = document.getElementById("ping-pong-table");
  let paddle = document.getElementById("paddle");

  let ballX = 50;
  let ballY = 50;

  let dx = 2;
  let dy = 2;

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  setInterval(function exec(){

  ballX +=dx;
  ballY +=dy;
  
  ball.style.left =`${ballX}px`;
  ball.style.top =`${ballY}px`

  if (ballX <paddle.offsetLeft +paddle.offsetWidth && ballY>paddle.offsetTop && ballY +ball.offsetHeight <paddle.offsetTop +paddle.offsetHeight)
  {
    dx*=-1;
  }
 if(ballX>table.offsetWidth -ball.offsetWidth || ballX<=0) dx*=-1;
 if(ballY >table.offsetHeight -ball.offsetHeight || ballY <=0) dy *=-1;
 

  } , 1);

  let paddleY = 0;
  let dPy=10;
  document.addEventListener("keydown",(event) =>{

    event.preventDefault();
    if(event.keycode ==38 && paddleY >0){
        paddleY += (-1)*dPy ;;


    }
    else if ( event.keycode ==40&& paddleY <table.offsetHeight -paddle.offsetHeight){
        paddleY +=dPy;
    }
    paddle.style.top =`${paddleY}px`;
});


document.addEventListener("mousemove",(event)=>{
    if(event.clientX >table.offsetLeft + (table.offsetWidth/2)) return;
    let mouseDistanceFromtop =event.clientY;
    let distanceoftableFromTop = table.offsetTop;
    let mousePointControl = mouseDistanceFromtop -distanceoftableFromTop -paddle.offsetHeight/2;
    paddleY =mousePointControl;
    if(paddleY <=0 ||paddleY >table.offsetHeight -paddle.offsetHeight )return;
    paddle.style.top=`${paddleY}px`;

})

});

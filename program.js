var ball =  new Ball(10,50,100,4,4);
var balls = Array(ball);
var ancho,largo;
var limiteDerecha,limiteIzquierda,limiteArriba,limiteAbajo;
function Ball(radio, x, y,dx,dy) {
    this.radio = radio;
    this.x = x;
    this.y = y;
	this.dx = dx;
	this.dy = dy;
}

function render(){
	move();
	window.requestAnimationFrame(render);
}

function move(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var index = 0; index < balls.length; index++)
	{
		balls[index].x += balls[index].dx;
		balls[index].y += balls[index].dy;
		balls[index] = checkColl(balls[index]);
		ctx.beginPath();
		ctx.arc(balls[index].x,balls[index].y,balls[index].radio,0,0.2*Math.PI,true);
		ctx.fill();
	}
	
}
function checkColl(ball){
	if(ball.x>limiteDerecha){
		ball.dx *=-1;
	}
	if(ball.x < limiteIzquierda){
		ball.dx *=-1;
	}
	if(ball.y > limiteAbajo){
		ball.dy *=-1;
	}
	if(ball.y < limiteArriba){
		ball.dy *=-1;
	}
	return ball;
}
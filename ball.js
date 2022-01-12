let ball = {
  x: 500,
  y: 500,
  xVel: 4,
  yVel: 4,
  radius: 20,
  speedSquared: 32
};

function bounceY() {
  ball.yVel = ball.yVel * -1;
}

function bounceX() {
  ball.xVel = ball.xVel * -1;
}

function ballUpdate() {
  //walls collision
  if (ball.y <= ball.radius / 2) {
    bounceY();
  }
  if (ball.x <= ball.radius / 2 || ball.x >= width - ball.radius / 2) {
    bounceX();
  }

  //player collision
  if (
    ball.radius / 2 + ball.y >= player.y - player.thickness / 2 &&
    ball.radius / 2 + ball.y <= player.y + player.thickness / 2 &&
    ball.x <= player.x + player.length / 2 &&
    ball.x >= player.x - player.length / 2
  ) {
    ball.yVel = -sqrt(random(ball.speedSquared/4, ball.speedSquared))
    if (ball.xVel > 0) {
      ball.xVel = sqrt(abs(ball.speedSquared - sq(ball.yVel)))
    }
    if (ball.xVel < 0) {
      ball.xVel = -sqrt(abs(-ball.speedSquared + sq(ball.yVel)))
    }
    console.log(sq(ball.xVel) + sq(ball.yVel))
  }
  
  //move ball
  if (!ballOnPaddle) {
    ball.x += ball.xVel;
    ball.y += ball.yVel;
  } else {
    ball.x = player.x;
    ball.y = player.y + ball.radius/2 + player.thickness/20 
  }

  if (ball.y > height) {
    gameOver();
  }
}

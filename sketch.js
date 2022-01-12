var player = {
  x: 0,
  y: 0,
  length: 100,
  thickness: 20,
};

let score = 0;
let firstTry = true;
let ballOnPaddle = true;
let dead = 0;

function setup() {
  canvas = createCanvas(700, 700);
  canvas.position(300, 50);
  reset();
}

function reset() {
  textAlign(CENTER);
  frameRate(60);
  dead = 0;
  player.x = mouseX;
  player.y = height * 0.9;
  ball = {
    x: 500,
    y: 500,
    xVel: 4,
    yVel: 4,
    radius: 20,
    speedSquared: 32
  };
  rectMode(CENTER);
  wall = []
  bricksGen(9);
  score = 0;
  ball.xVel = 4
  player.yVel = 4
  ballOnPaddle = true
}

function draw() {
    rectMode(CENTER);
    background(0);
    fill("red");
    showWall();
    player.x = mouseX;
    player.x = constrain(mouseX, player.length / 2, width - player.length / 2);
    ballUpdate();
    collisionCheck();
    console.log(dead)
    fill("orange");
    rect(player.x, player.y, player.length, player.thickness);
    fill("yellow");
    circle(ball.x, ball.y, ball.radius);
    textSize(24);
    text("Score: " + score, width * 0.08, height * 0.98); 
}

function mousePressed() {
  ballOnPaddle = false;
}

function keyPressed() {
  if (keyCode == 32) {
    if (dead == 1) {
      reset();
    }
  }
}

function gameOver() {
  dead = 1;
  firstTry = false;
  fill("yellow");
  textSize(height / 33);
  text("GAME OVER", width / 2, height / 2);
  textSize(height / 50);
  text("PRESS SPACE TO PLAY AGAIN", width / 2, height / 1.87);
}

function collisionCheck() {
  for (let i = 0; i < wall.length; i++) {
    if (
      wall[i].x - brickLength / 2 - ball.radius / 2 <= ball.x &&
      ball.x <= wall[i].x + brickLength / 2 + ball.radius / 2 &&
      wall[i].y - brickThickness / 2 - ball.radius / 2 <= ball.y &&
      ball.y <= wall[i].y + brickThickness / 2 + ball.radius / 2
    ) {
      if (
        (wall[i].x - brickLength / 2 - 2 >= ball.x &&
          wall[i].x + brickLength / 2 + 2 >= ball.x) ||
        (wall[i].x - brickLength / 2 - 2 <= ball.x &&
          wall[i].x + brickLength / 2 + 2 <= ball.x)
      ) {
        bounceX();
      } else {
        bounceY();
      }
      wall.splice(i, 1);
      score++
      ball.speedSquared = 32 + score * 0.9
      break;
    }
  }
}

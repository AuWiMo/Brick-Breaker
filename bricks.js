
let brickLength = 75;
let brickThickness = 25;
let wall = [];


function Brick(xpos, ypos) {
  this.x = xpos;
  this.y = ypos;
} 

function bricksGen(rows) {
  for (let i = 0; i < rows; i++) {
    //if (i%2 == 1) {
      for(let j = 0; j < 10; j++) {
        let b = new Brick(45 + j * 79, 150 + brickThickness/2 + i * (brickThickness * 50/45))
        wall.push(b);
        }
   /* } else {
      for(let j = 0; j < 9; j++) {
        let b = new Brick(45 + brickLength / 2 + j * 79, 150 + brickThickness/2 + i * (brickThickness * 50/45))
        wall.push(b);
      }
    } */
  }
}

function showWall() {
  fill(140, 0, 0)
  for (let i = 0; i < wall.length; i++) {
    rect(wall[i].x, wall[i].y, brickLength, brickThickness)
  }
}
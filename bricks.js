
let brickLength = 70;
let brickThickness = 18;
let wall = [];


function Brick(xpos, ypos, color) {
  this.x = xpos;
  this.y = ypos;
  this.color = color
} 

function bricksGen(rows) {
  let iColor = 'red'
  for (let i = 0; i < rows; i++) {
      if (i == 1) {
        iColor = "orangered"
      } else if (i == 2) {
        iColor = "orange"
      } else if (i == 3) {
        iColor = "yellow"
      } else if (i == 4) {
        iColor = "lime"
      } else if (i == 5) {
        iColor = "limegreen"
      } else if (i == 6) {
        iColor = "mediumturquoise" 
      } else if (i == 7) {
        iColor = "blue"
      } else if (i == 8) {
        iColor = "darkviolet"
      } else if (i == 9) {
        iColor = "fuchsia"
      }
      for(let j = 0; j < 10; j++) {
        let b = new Brick(45 + j * 79, 75 + brickThickness/2 + i * (brickThickness * 50/45), iColor)
        wall.push(b);
      }
   }
}

function showWall() {
  for (let i = 0; i < wall.length; i++) {
    fill(wall[i].color)
    rect(wall[i].x, wall[i].y, brickLength, brickThickness)
  }
}

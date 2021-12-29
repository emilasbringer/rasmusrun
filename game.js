const ground = document.querySelector('#ground');
const player = document.querySelector('#player');
const obstacle = document.querySelector('#obstacle1');
const obstacle2 = document.querySelector('#obstacle2');
const point1 = document.querySelector('#point1')
const point2 = document.querySelector('#point2')
const deathScreen = document.querySelector('.deathScreen');
const pointCounter = document.querySelector('.pointCounter');

const playerX = 100;
const obstacleWidth = 128;
const pointWidth = 128;

let obstacleOffset1;
let obstacleOffset2;
let pointOffset1;
let pointOffset2;
let obstacle1X;
let obstacle2X;
let point1X;
let point2X;
let currentGroundX = 0;
let groundSpeed = 7;
let points = 0;

let jump = false;
let doubleJump = false;
let gravity = 1;
let playerY = 300;
let playerYVelocity = 0;

player.style.top = playerY + "px";

deathScreen.style.display = "none";

function keyDown(event) {
    let unicode= event.which;
    if (unicode == 32 && !jump) {
        jump = true;
        console.log(jump + " " + doubleJump);
    }
    else if (jump && !doubleJump) {
        doubleJump = true;
        console.log(jump + " " + doubleJump)
    } 
  }


let gameLoop = setInterval(() => { 
    if ( currentGroundX < -2500) {
        currentGroundX = 0;
        obstacleOffset1 = randomNumber();
        obstacleOffset2 = randomNumber();
        pointOffset1 = randomNumber();
        pointOffset2 = randomNumber();
        point1.style.display = "block";
        point2.style.display = "block";
    }
    else {
        obstacle1X = obstacleOffset1 + currentGroundX;
        obstacle2X = obstacleOffset2 + currentGroundX;
        point1X = pointOffset1 + currentGroundX;
        point2X = pointOffset2 + currentGroundX;
        currentGroundX -= groundSpeed;
        ground.style.left = currentGroundX + "px";
        obstacle.style.left =  obstacle1X + "px";
        obstacle2.style.left = obstacle2X + "px";
        point1.style.left = point1X + "px";
        point2.style.left = point2X + "px";
    }

    if ((obstacle1X > playerX && obstacle1X < (playerX + obstacleWidth) && playerY > 365) || (obstacle2X > playerX && obstacle2X < (playerX + obstacleWidth) && playerY > 365)) {
        console.log("DEATH at " + playerY);
        deathScreen.style.display = "flex";
        clearInterval(gameLoop);
    }

    if ((point2X > playerX && point2X < (playerX + obstacleWidth) && playerY < 335) ) {
        console.log("Point gained");
        point2.style.display = "none";
        points++;
        pointCounter.innerHTML = "Points: " + points;
    }
    if ((point1X > playerX && point1X < (playerX + obstacleWidth) && playerY < 335)  ) {
        console.log("Point gained");
        point1.style.display = "none";
        points++;
        pointCounter.innerHTML = "Points: " + points;
    }
    

    if (playerY < 500) {
        playerY += playerYVelocity;
        playerYVelocity += gravity;
        //console.log(playerY);
        jump = false;

    }
    else {
         
        playerYVelocity = 0;
        playerY = 500;
        if (jump) {
            playerYVelocity = -35;
            playerY = 499;
        }
    }
    player.style.top = playerY + "px";
    console.log(playerX + " " + obstacle1X);
}, 10);

function randomNumber() {
    let max = 2100;
    let min = 1500;
    let output = Math.floor(Math.random() * (max - min) + min);
    return output;
}


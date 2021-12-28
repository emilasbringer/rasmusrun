const ground = document.querySelector('#ground');
const player = document.querySelector('#player');
const obstacle = document.querySelector('#obstacle1');
const obstacle2 = document.querySelector('#obstacle2');

let obstacleOffset1;
let obstacleOffset2;
let currentGroundX = 0;
let groundSpeed = 7;

let jump = false;
let doubleJump = false;
let gravity = 1;
let playerY = 300;
let playerYVelocity = 0;

player.style.top = playerY + "px";

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


setInterval(() => { 
    if ( currentGroundX < -2500) {
        currentGroundX = 0;
        obstacleOffset1 = randomNumber();
        obstacleOffset2 = randomNumber();
    
    }
    else {
        currentGroundX -= groundSpeed;
        ground.style.left = currentGroundX + "px";
        obstacle.style.left = obstacleOffset1 + currentGroundX +"px";
        obstacle2.style.left = obstacleOffset2 + currentGroundX +"px";
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
            playerYVelocity = -30;
            playerY = 499;
        }
    }
    player.style.top = playerY + "px";
    console.log(playerYVelocity);
}, 10);

function randomNumber() {
    let max = 2100;
    let min = 1500;
    let output = Math.floor(Math.random() * (max - min) + min);
    return output;
}
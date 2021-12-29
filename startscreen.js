const bajs = document.querySelector('.bajs');
const poopButton = document.querySelector('#poopButton');
const chicken = document.querySelector('.chicken');

let hide = false;
let pooping = true;
var poopInterval;
bajs.style.display = "none";

function poop() {
    if (pooping) {
        pooping = false;
        poopButton.innerHTML = "Stop bajsing";
        poopInterval = setInterval(() => {
            if (!hide) {
                bajs.style.display = "none";
                hide = true;
            }
            else  {
                bajs.style.display = "block";
                hide = false;
            }
        }, 40);
    }
    else {
        clearInterval(poopInterval);
    }
}

function killChicken() {
    console.log("KIlling the chicken fucker")
    chicken.style.top = "470px";
    chicken.src = "./assets/deadChicken.png";
    
}

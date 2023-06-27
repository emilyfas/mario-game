const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const startButton = document.querySelector(".start-container");

function hoverOn(){
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;
}
function hoverOut(){
    pipe.style.animation = 'pipeAnimation 3s infinite linear';
    pipe.style.left = 'auto';
    clouds.style.animation = 'cloudsAnimation 4s infinite linear';
    clouds.style.left = 'auto';
}

startButton.addEventListener("mouseover", hoverOn);
startButton.addEventListener("mouseout", hoverOut);
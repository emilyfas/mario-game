const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const overDiv = document.querySelector(".game-status");
var counterVal = 0;
var body = document.querySelector(".tela-body");

function jump(){
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
    } , 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(document.body.offsetWidth >= 760){
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'images/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '35px';
    
            clearInterval(loop)
    
            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150){    
            updateDisplay(++counterVal);
        } 
    } else if(document.body.offsetWidth >= 420){
        if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 50){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'images/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '35px';
    
            clearInterval(loop)
    
            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150){    
            updateDisplay(++counterVal);
        }  
    }else{
        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 50){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'images/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '35px';
    
            clearInterval(loop)
    
            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150){    
            updateDisplay(++counterVal);
        } 
    }
    
}, 10);

function gameOver() {
    overDiv.innerHTML += `<img src="images/overpic.png" alt="imagem game over" class="game-over">
    <button class="buttonStart" onclick="start()">
        <img src="images/Daco_4422541.png" alt="imagem começar jogo" width="150px" class="start">
    </button>`;
}
function start() {
    location.reload();
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

body.addEventListener('touchstart', jump);

document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        jump();
      }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        start();
      }
});

const inst = document.querySelector(".instrucoes");

let i = 0
function handleInstrucao(){
  
  if (window.innerWidth < 990 && i < 1){
  inst.innerHTML += "<p><b>Usando Mobile?</b> Toque a tela para pular e pressione <i>Start</i> para reiniciar o jogo.</p>";
  
  i += 1;
  } 
}

window.addEventListener("resize", handleInstrucao);

window.addEventListener("pageshow", handleInstrucao);



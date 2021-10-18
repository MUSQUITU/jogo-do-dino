const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo')
let position = 0;
let isJumping = false;

//evento de pressionar a tecla de espaço
function pulo(event){ 
  if(event.keyCode === 32){
    if(!isJumping){
    jump();
    }
  }
}
function jump(){
  
  isJumping = true;
  let up = setInterval(() => {
    if(position >= 150){
      clearInterval(up);

      //descendo
      let down = setInterval (() =>{
        if( position <= 0 ){
          clearInterval(down)
          isJumping = false;
        } else {
        position -= 20;
        dino.style.bottom = position + 'px';
        }
      }, 20)
    } else { 
      //subindo
    position += 20;
    dino.style.bottom = position + 'px';
    }
  }, 20)
}

function criarCactos(){
  const cactos = document.createElement('div');
  let cactosPosition = 1000;
  let randomTime = Math.random() * 6000;
  

  cactos.classList.add('cactos')
  cactos.style.left = 1000 + 'px';
  fundo.appendChild(cactos)

  let left = setInterval(() =>{
      if(cactosPosition < -60){
      clearInterval(left)
      fundo.removeChield(cactos);
    } else if(cactosPosition > 0 && cactosPosition < 60 && position < 60){
      //game over
      clearInterval(left)
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactosPosition -= 10;
      cactos.style.left = cactosPosition + 'px'
    }
  }, 20);
  setTimeout(criarCactos, randomTime)
}

criarCactos();
document.addEventListener('keyup', pulo);


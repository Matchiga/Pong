//Biblioteca collide2D.js
let colidiu = false;

//variável para ter chance de erro
let chanceDeErrar = 0;

//placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let bordaRaquete = 5;

//raquete
let xRaquete = 5;
let yRaquete = 150;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadeXbolinha *= -1;
  }
  if (yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura, bordaRaquete);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){ 
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
/* MULTIPLAYER
function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}*/

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  yRaqueteOponente = yBolinha * 0.715;
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20, 5);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20, 5);
  fill(255);
  text(pontosOponente, 470, 26)
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
}
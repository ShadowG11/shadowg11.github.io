function setup() {
  createCanvas(800, 400);
}

let xBolinha = 400;
let yBolinha = 200;
let diametro = 18;
let raio = diametro/2

let velocidadeX = 5;
let velocidadeY = 5;

let xBarreira = 5;
let yBarreira = 150;
let comprimentoBarreira = 12;
let alturaBarreira = 90;

let xBarreiraOponente = 783;
let yBarreiraOponente = 150;

let pontosUsuario = 0;
let pontosOponente = 0;

let hit = false;

function draw() {
  background(0);
  desenhaBolinha();
  movimentoBolinha();
  colisaoBorda();
  fazBarreira(xBarreira, yBarreira);
  movimentoBarreira();
  colisaoBarreiraBiblioteca(xBarreira, yBarreira);
  fazBarreira(xBarreiraOponente, yBarreiraOponente)
  colisaoBarreiraBiblioteca(xBarreiraOponente, yBarreiraOponente);
  movimentoBarreiraOponente();
  pontuacao(pontosUsuario, pontosOponente);
  marcarPontos();
}

function desenhaBolinha(){

  circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){

  xBolinha = xBolinha + velocidadeX;
  yBolinha = yBolinha + velocidadeY;
}

function colisaoBorda(){
 
  if (xBolinha + raio > 800 || xBolinha < 0){
   
    velocidadeX = velocidadeX * (-1);
  }

  if (yBolinha + raio > 400 || yBolinha < 0){
   
    velocidadeY = velocidadeY * (-1);
  }
}  

function fazBarreira(x,y){

  rect (x, y , comprimentoBarreira, alturaBarreira);
}

function movimentoBarreira(){

  if (keyIsDown(UP_ARROW)){
  
    yBarreira = yBarreira - 5;
  }
  if (keyIsDown(DOWN_ARROW)){
  
    yBarreira = yBarreira + 5;
  }
  
  if (yBarreira < 0){
  
    yBarreira = 0
  }
  
  if (yBarreira +alturaBarreira > 400){
  
    yBarreira = 400 - alturaBarreira
  }  
}

function colisaoBarreiraBiblioteca(x,y){

  hit = collideRectCircle(x, y, comprimentoBarreira, alturaBarreira, xBolinha, yBolinha, diametro);
  
  if (hit){
  
    velocidadeX = velocidadeX * (-1);
  }
}

//dificuldade do bot, ainda pode ser melhorada
function movimentoBarreiraOponente(){
  
  if (yBarreiraOponente < 0){
  
    yBarreiraOponente = 0;
  }
  
  if (yBarreiraOponente + alturaBarreira > 400) {
  
    yBarreiraOponente = 400 - alturaBarreira;
  }
  
  if (yBolinha < 200 || yBolinha > 350) {

    yBarreiraOponente = yBarreiraOponente - 3.5
  }

  if (yBolinha > 200 || yBolinha < 50){

    yBarreiraOponente = yBarreiraOponente + 3.5
  }
}

function pontuacao(u,o){
  
  fill(255);
  textSize(32);
  text (u , 130, 40);
  text (o , 670, 40);
}

function marcarPontos(){

  if (xBolinha + raio < xBarreira){
  
    pontosOponente = pontosOponente + 1;
  }

  if (xBolinha - raio > xBarreiraOponente){
  
    pontosUsuario = pontosUsuario + 1;
  }
}
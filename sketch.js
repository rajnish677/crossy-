var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var Player
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  Player = new player(width/2,height-25);
  
  
  
  
 
   
 }

function draw() {
  background("skyblue");
 
 

  drawSprites();
}


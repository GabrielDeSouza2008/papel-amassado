
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var chao;
var parede1;
var parede2;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var opcoesBola={
		isStatic : false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	bola = Bodies.circle(20, 500, 40, opcoesBola)
	World.add (world, bola)
	
	chao = new Chao(width/2, 680, 1500, 10)
	parede1 = new Chao(1100, 600, 20, 120)
	parede2 = new Chao (1350, 600, 20, 120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 chao.display()
 ellipse(bola.position.x, bola.position.y, 80)
 parede1.display();
 parede2.display();
}
function keyPressed(){
	if (keyCode === 38){
		Body.applyForce(bola, bola.position,{x:8, y:-3000})
		
	}



}




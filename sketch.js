
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box
var string
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(300,400,50,50)
	box2 = createSprite(400,400,50,50)
	box3 = createSprite(500,400,50,50)
	box4 = createSprite(600,400,50,50)
string = createSprite(300,box1.x,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  string.x=box1.x
  string.y=box1.y
  drawSprites()
 
}




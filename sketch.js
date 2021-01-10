const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Engine;
var aiWorld;
var paper , ground , dustbin;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	paper = new Shelf();
	
	dustbin = new Dustbin();

    ground = new Ground();


	Engine.run(engine);
  
}


function draw() {
  background("light green");

  engine.Update(Engine);

  paper.display();

  dustbin.display();

  ground.display();

  drawSprites();
 
}


function keyPressed() {

  if(keyCode === UP_ARROW){
   Matter.Body.applyForce( paperObject.body , paperObject.body.position , {x = 98 , y = 280} );
  }
}



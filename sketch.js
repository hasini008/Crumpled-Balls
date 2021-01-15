const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var AiEngine;
var aiWorld;
var paper , ground , dustbin;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	engine = AiEngine.create();
	world = engine.world;
    
	paper = new Shelf();

    ground = new Ground();

boxPosition=width/2-90
 	boxY=600;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	AiEngine.run(engine);
  
}


function draw() {
  background("light green");

  engine.Update(AiEngine);

  paper.display();

  ground.display();

  drawSprites();
 
}


function keyPressed() {

  if(keyCode === UP_ARROW){
   Matter.Body.applyForce( paperObject.body , paperObject.body.position , {x:98 , y:280} );
  }
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var base;
var side1,side2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:true
	}
	ground=Bodies.rectangle(400,650,800,30,options);
	World.add(world,ground)
	
	ball1= new Ball(200,600)
	
	base=Bodies.rectangle(650,620,200,30,options);
	World.add(world,base);

	side1=Bodies.rectangle(540,580,20,100,options);
	World.add(world,side1)

	side2=Bodies.rectangle(760,580,20,100,options);
	World.add(world,side2);
	Engine.run(engine);	  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 rect(ground.position.x, ground.position.y,800,30);
 rect(base.position.x, base.position.y, 200,30);
 rect(side1.position.x, side1.position.y, 20,100);
 rect(side2.position.x, side2.position.y, 20,100);
ball1.display();
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:10,y:-25});
	}
}
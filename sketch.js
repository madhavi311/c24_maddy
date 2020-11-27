
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var w1, w2, w3;
var p1, g1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
w1= new dustbin(620, 360, 20, 100);
w2= new dustbin(700, 390, 150, 20);
w3= new dustbin(770, 360, 20, 100);
p1= new paper(100,200,25);
g1= new Ground(30,400,1200,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  text(mouseX+ ',' +mouseY, mouseX, mouseY);
  w1.display();
  w2.display();
  w3.display();
 p1.display();
  g1.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:3.5,y:-4});
  }
}



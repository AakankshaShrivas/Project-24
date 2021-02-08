
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	plane=new Plane(600,height,1200,30);
	hammer = new Hammer(10,100);
	stone=new Stone(700,320,100,100);
    rubber=new Rubber(900,450,40);

	sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);

	iron = new Iron(300,350);
	Engine.run(myengine);
  
}


function draw() {
  
  background("lightblue");
    plane.display();
  	hammer.display();
  	rubber.display();
  	stone.display();
  	iron.display();
  	sand1.display();
  	sand2.display();
	sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
  drawSprites();
 
}




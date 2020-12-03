const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,box1,box2;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boy,boyImage;

function preload(){
  boyImage=loadImage("boy.png")
}

function setup() {
  createCanvas(1200,700);
  
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(600,520,1200,10); 

  boy = createSprite(140,430,50,50);
  boy.addImage(boyImage);
  boy.scale=0.1;

  tree = new Tree(900,260);

  stone = new Stone(145,340)
  
  mango1= new Mango(800,210);
  mango2= new Mango(1090,190);
  mango3= new Mango(1010,140);
  mango4= new Mango(1020,70);
  mango5= new Mango(960,200);
  mango6= new Mango(720,130);
  mango7= new Mango(800,65);
  mango8= new Mango(950,40);
  mango9= new Mango(880,60);
  mango10= new Mango(880,150);

   chain= new Chain(stone.body,{x:80,y:375})

   Engine.run(engine);

}

function draw() {
 
  background("grey");


  

  Engine.update(engine);



  ground.display();  
  
  tree.display();

  
  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  
  chain.display();

  
  stone.display();
  



  fill("red")
  text (mouseX+","+mouseY,mouseX,mouseY);


  textSize(25);
  fill("yellow");
  text("PRESS THE 'SPACE' BUTTON TO PLAY AGAIN ",50,50);
  drawSprites();
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	chain.fly();
}




function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.radius+lstone.radius)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:145,y:340})
    launcherObject.attach(stone.body);
  }
}



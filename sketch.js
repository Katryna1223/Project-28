
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,160,30);
	mango2=new mango(1002, 183, 28);
	mango3=new mango(1139, 123, 29);
	mango4=new mango(1194, 197, 26);
	mango5=new mango(953, 154, 34);
	mango6=new mango(939, 235, 35);
	mango7=new mango(1239, 245, 30);
	mango8=new mango(1121, 254, 32);
	mango9=new mango(1020, 231, 29);
	mango10=new mango(1050, 80, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(200, 200, 30);
	
	launcherObj = new Sling(stoneObj.body, {x: 240, y: 420});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1300,
			height: 600,
			wireframes: false
		}
	});
	
	Engine.run(engine);
	Render.run(render);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
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

  stoneObj.display();
  groundObject.display();
  launcherObj.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);

  textSize(40);
  text('Launch the stone at the tree to get some mangoes!', 20, 40);
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
	launcherObj.fly();
}	
function detectCollision(Lstone, Lmango){
	var stonePos = Lstone.body.position;
	var mangoPos = Lmango.body.position;
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
		if(distance >= Lmango.radius-Lstone.radius){
			Matter.Body.setStatic(Lmango.body, false);
		}	

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x: 200, y: 300});
		launcherObj.attach(stoneObj.body);
	}
}
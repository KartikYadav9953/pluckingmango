
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	m2=new mango(1120, 160, 30);
	m3=new mango(1020, 80, 30);
	m4=new mango(990, 200, 30);
	m5=new mango(920, 170, 30);
	m6=new mango(1190, 200, 40)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	s1 = new stone(550, 600);

	//rubber = new chain(s1,{x:220, y:60});

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  s1.display();

  groundObject.display();
}

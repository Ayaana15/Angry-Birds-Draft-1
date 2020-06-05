const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var ball;
var Box1;
var Box2;
var Pig1;
var Log1;
var Box3;
var Box4;
var Pig2;
var Bird1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(300,380,2000,50)
    Box1 = new Box(700,100,50,50)
    Box2 = new Box(900,100,50,50)
    Pig1 = new Pig(800,300)
    Log1 = new Log(800,200,200,PI/7)
    Box3 = new Box(700,150,50,50)
    Box4 = new Box(900,150,50,50)
    Pig2 = new Pig(800,180);
    Bird1 = new Bird(mouseX,mouseY,50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground1.display();
    Box1.display();
    Box2.display();
    Pig1.display();
    Log1.display();
    Box3.display();
    Box4.display();
    Pig2.display();
    Bird1.display();
}
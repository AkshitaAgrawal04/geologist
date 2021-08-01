const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberball;
var stone;
var ironpiece;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberball= new Rubber(750,550,100);
    stone= new Stone(550,500,120,120);
    ironpiece= new Iron(400,500,140,200);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberball.display();
    stone.display();
    ironpiece.display();
}

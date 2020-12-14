const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var rect1,ground,ball
function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
rect1=Bodies.rectangle(200,200,50,50);
World.add(world,rect1)
var options={isStatic:true}
ground=Bodies.rectangle(400,390,800,50,options);
World.add(world,ground)
var balloptions={restitution:1.0}
ball=Bodies.circle(400,100,25,balloptions)
World.add(world,ball)
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
rectMode(CENTER)
rect(rect1.position.x,rect1.position.y,50,50)
rect(ground.position.x,ground.position.y,800,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25)
}
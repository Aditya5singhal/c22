const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World = Matter.World 

var engine,world,obj1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

var obj1opt = {
  isStatic:true
}
var obj3opt = {
  restitution:1,
  density:0.7
}



  obj1 = Bodies.rectangle(0,390,800,10,obj1opt );
  World.add(world,obj1);

  console.log(obj1);

  obj3 = Bodies.rectangle(200,100,50,50,obj3opt);
  World.add(world,obj3);




}

function draw() {
  background("lightgreen");
  Engine.update(engine)
  rect(obj1.position.x,obj1.position.y,800,10)  ;
  ellipse(obj3.position.x,obj3.position.y,50,50)  ;
 
}
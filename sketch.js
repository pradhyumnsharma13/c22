
var myengine,myworld,myobj;
var mycircle;
function setup() {
  createCanvas(400,400);

  //engine
  myengine = Matter.Engine.create();
  //world
  myworld = myengine.world;
  //obj
//JSON obj
  var myoptions = {
      isStatic:true
  }

  myobj = Matter.Bodies.rectangle(200,380,400,100,myoptions);
  Matter.World.add(myworld,myobj);
  var myoptions2 = {
restitution:1.0

  }
mycircle = Matter.Bodies.circle(200,200,20,myoptions2)
 Matter.World.add(myworld,mycircle)
}

function draw() {
  background("black"); 
  console.log(myobj)
  console.log(myobj.position.y);

  Matter.Engine.update(myengine)

  rectMode(CENTER);
  rect(myobj.position.x,myobj.position.y,400,100);
  ellipseMode(RADIUS)
ellipse(mycircle.position.x,mycircle.position.y,20,20)
 
}

//rect(x,y,w,h)
//rectMode(CENTER)
//physics engine

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [] ;
var plinkos = [] ;
var divisions = [] ;
var divisionheight = 300 ;
var score = 0 ;

function setup() {
  createCanvas(800,800);
  engine= Engine.create();
  world = engine.world;

  ground = new Ground (400,790,800,20);
  for ( var k = 0; k <= width; k = k + 80 ) {
    var d = new Division(k,height-divisionheight/2,10,300);
    divisions.push(d);
  }
  for ( var i = 75; i <= width-10; i = i + 50 ) {
    var p1 = new Plinko (i,75,10);
    plinkos.push(p1);
  }
  for ( var i = 50; i <= width-10; i = i + 50 ) {
    var p2 = new Plinko (i,175,10);
    plinkos.push(p2);
  }
  for ( var i = 75; i <= width-10; i = i + 50 ) {
    var p3 = new Plinko (i,275,10);
    plinkos.push(p3);
  }
  for ( var i = 50; i <= width-10; i = i + 50 ) {
    var p4 = new Plinko (i,375,10);
    plinkos.push(p4);
  }
  
}

function draw() {
  background(255,112,255);  

  ground.display();
  for (var k = 0; k< divisions.length; k++ ){
    divisions[k].display();
  }
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     var p= new Particle(random(width/2-30, width/2+30), 10,10)
     particles.push(p);
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  drawSprites();

}
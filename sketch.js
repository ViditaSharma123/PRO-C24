const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var paperObject, groundObject; 
var world; 
var container, container2, container3; 

function setup() { 
   createCanvas(1100, 700); 
   rectMode(CENTER); 
   
   engine = Engine.create(); 
   world = engine.world; 
   
   container = Bodies.rectangle(1000,475,70,20,{isStatic:true}); 
   container2 = Bodies.rectangle(955,450,20,70,{isStatic:true}); 
   container3 = Bodies.rectangle(1025,450,20,70,{isStatic:true}); 
   
   paperObject = new Paper(200,450,40); 
   groundObject = new Ground(width/2,670,width,20); 
   Engine.run(engine);
 }
 
 function draw() { 
     
    rectMode(CENTER); 
    background(0); 
    rect(container.position.x, container.position.y, 70,20);
    rect(container2.position.x, container2.position.y, 20,70); 
    rect(container3.position.x, container3.position.y, 20,70); 
    paperObject.display(); 
    groundObject.display(); 

    keyPressed();
} 

function keyPressed() {
    
    if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-85}); 
    

    } 
}


























































































































































































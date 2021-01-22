
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,platform,platform2,block1,block2,block3,
block4,block5,block6,block7,block8,block9;
var score=0,backgroundImg;

var polygon,slingsoot;
function preload(){
    
    //Bodies.circle(100,200,20);


}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(0,400,3000,20);
    platform = new Ground(600, 303, 200, 10);
  
    block1=new Box(530,295,30,30);
    block2=new Box(560,295,30,30);
    block3=new Box(590,295,30,30);
    block4=new Box(620,295,30,30);

    block5=new Box(540,195,30,40);
    block6=new Box(570,195,30,40);
    block7=new Box(600,195,30,40);
    block8=new Box(550,155,30,40);
    block9=new Box(580,155,30,40);
   polygon= new Polygon(66,269,40,40)
    //World.add(world,polygon);
    slingsoot=new SlingShot(polygon.body,{x:206,y:254});
    
}
function draw(){ 
    
    background("blue");
    
    drawSprites()
    noStroke()
    textSize(35)
    text("score" +score,750,90)
    Engine.update(engine);
   // text(mouseX+":"+mouseY,mouseX,mouseY);
    ground.display();
  
    platform.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     




  
   block1.score();
   block2.score();
   block3.score();
   block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    

    slingsoot.display();
    polygon.display();
 


    //platform2.display();    

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingsoot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingsoot.attach(polygon.body)
    }
}



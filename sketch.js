const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var box1, box2, box3, box4;
var box5, box6, ground, stand, ball, chain;

var Score = 0;


function setup() {
    createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;
   

    ground = new Ground(450,490,900,20);
    stand = new Ground(450, 470, 300, 20);
    box1 = new Box(330,445,30,30);
    box2 = new Box(360,445,30,30);
    box3 = new Box(390,445,30,30);
    box4 = new Box(420,445,30,30);
    box5 = new Box(450,445,30,30);
    box6 = new Box(360,415,30,30);
    box7 = new Box(390,415,30,30);
    box8 = new Box(420,415,30,30);
    box9 = new Box(390,385,30,30);
    ball = new Ball(100,200,20,20);
    chain = new Rope(ball.body,{x:100,y:245} );
    Engine.run(engine);
}


function draw() {
    background("white"); 
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball.display();
    chain.display();
    Score.display(); 
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
            }


  function mouseReleased(){
    chain.fly();
  }


  function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball.body);
    }
}


function score(){
if(this.visibility<0 && this.visibility >-105){
  Score+1;
}
}
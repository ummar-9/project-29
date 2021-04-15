const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(390,300,250,10);
    
    Block1 = new Block(300,275,30,40);
    Block2 = new Block(330,275,30,40);
    Block3 = new Block(360,275,30,40);
    Block4 = new Block(390,275,30,40);
    Block5 = new Block(420,275,30,40);
    Block6 = new Block(450,275,30,40);
    Block7 = new Block(480,275,30,40);

    Block8 = new Block(330,235,30,40);
    Block9 = new Block(360,235,30,40);
    Block10 = new Block(390,235,30,40);
    Block11 = new Block(420,235,30,40);
    Block12 = new Block(450,235,30,40);

    Block13 = new Block(360,195,30,40);
    Block14 = new Block(390,195,30,40);
    Block15 = new Block(420,195,30,40);

    Block16 = new Block(390,155,30,40);
}
function draw(){
    background("black");
    Engine.update(engine);
    text("drag the hexagonal stone and release it, to launch it towards the blocks",600,200);
    ground1.display();

    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();

}

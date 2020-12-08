const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function setup(){
    createCanvas(windowWidth,windowHeight)
    engine=Engine.create()
    world=engine.world


   wall1=new walls(70,50,50,200)

   wall2=new walls(390,100,50,200)

   wall3=new walls(144,489,50,200)
   wall4=new walls(270,225,200,50)
   wall5=new walls(193,88,200,50)
    wall6=new walls(400,415,50,200)
    wall7=new walls(215,367,200,50)
    wall8=new walls(272,611,50,200)
    wall9=new walls(149,646,200,50)
    wall10=new walls(363,537,200,50)
    wall11=new walls(398,651,200,50)
    wall12=new walls(273,717,50,70)
    door1=new doors(396,260,50,115)
    wall13=new walls(59,366,110,50)
    wall14=new walls(689,313,50,620)
    wall15=new walls(833,405,50,680)
    wall16=new walls(511,346,200,50)
    door2=new doors(956,359,50,800)
    wall17=new walls(1139,265,50,200)
    wall18=new walls(1063,117,200,50)
    player1=new player(182,606,20,20)
}


function draw(){
    background(19, 163, 189)
    Engine.update(engine)
    //console.log(mouseX)
    //console.log(mouseY)


    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    door1.display();
    door2.display();
player1.display();
}

function keyPressed(){

    if(keyisPressed(Right_Arrow)){
        console.log("gtu")
        Matter.Body.setVelocity(player.body,{velocityX:2,velocityY:0})
    }
}
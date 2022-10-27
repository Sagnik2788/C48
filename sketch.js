var Bg,Vaccine,Soap,Win,Lose,Boy,invisibleground,Alpha,rand
var PLAY = 1;
var END = 0;
var BgIMG,VaccineIMG,SoapIMG,WinIMG,GOIMG,BoyIMG,DeltaIMG,AlphaIMG,OmiIMG
var Score = 0
var gameState = PLAY;
var SoundWin,SoundL


function preload() {
  DeltaIMG = loadImage("Delta.png")
  BoyIMG = loadAnimation("Lidd7Me5T-unscreen.gif")
  BgIMG = loadImage("Backg.png")
  VaccineIMG = loadImage("Vaccine.png")
  SoapIMG = loadImage("Soap.png")
  WinIMG = loadImage("Win.jpg")
  GOIMG = loadImage("gameover.jpg")
  AlphaIMG = loadImage("Alpha.png")
  OmiIMG = loadImage("Omi.png")
 
}


function setup(){
 createCanvas(600,400)

  Bg = createSprite(300,200,600,400)
  Bg.addImage(BgIMG)
  Bg.scale = 0.8  
  Bg.velocityX = -3.3

  Boy = createSprite(180,180) 
  Boy.addAnimation("running",BoyIMG)
  Boy.scale= 0.16 


  Lose = createSprite(290,160,600,400)
   Lose.addImage(GOIMG)
   Lose.scale = 0.9


   /*Delta=createSprite(80,290)
    Delta.addImage("chasing",DeltaIMG)
    Delta.scale = 0.12*/
  
   invisibleground = createSprite(185,315,10,10)
  invisibleground.visible = false

  Win = createSprite(270,175,600,400)
  Win.addImage(WinIMG)
  Win.scale = 0.9

  
  
  
 
  
  
//soap y position 239
    Soapgroup = createGroup()
    CoronaGroup = createGroup()
    VaccineGroup = createGroup()
      

    
}


function draw(){
  
  background("Cyan")
  if (gameState===PLAY){
  
  Bg.velocityX = -3.3
    if(Bg.x < 270){
    Bg.x = Bg.width/2.5;
    
    }
  Lose.visible = false
  Win.visible = false
  if(Score===200){
    Win.visible = true
   
    CoronaGroup.destroyEach();
    Soapgroup.destroyEach();
    VaccineGroup.destroyEach();
    
    Soapgroup.setVelocityXEach(0);
    VaccineGroup.setVelocityXEach(0)
    CoronaGroup.setVelocityXEach(0)
  }


    
    if(keyDown("space") && Boy.y>= 250){
    Boy.velocityY=-13
  }
  Boy.velocityY=Boy.velocityY+.8
  
    Boy.collide(invisibleground)

  if(keyDown("up") && Boy.y>= 250){
    Boy.velocityY=-13
  }

  for(var i = 0;i<Soapgroup.length;i++){
    if(Boy.isTouching(Soapgroup[i])){
      Score = Score + 5
      Soapgroup[i].destroy()
    }
  }
  for(var i = 0;i<VaccineGroup.length;i++){
    if(Boy.isTouching(VaccineGroup[i])){
      Score = Score + 20
      VaccineGroup[i].destroy()
    }
  }

  if(CoronaGroup.isTouching(Boy)){
  gameState = END;
}




    spawnSoap();
    spawnCorona();
    spawnVaccine()

} 
else if (gameState === END) {
 
  Lose.visible = true;

  Bg.velocityX = 0
  Boy.velocityY = 0
  CoronaGroup.destroyEach();
  Soapgroup.destroyEach();
  VaccineGroup.destroyEach();

  









}
  drawSprites();
  fill("Black")
  textSize(20)
  textFont("Georgia");
  text("Score:"+Score,447,37)
  
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
 
 

  
    
}




function spawnSoap(){
  if(frameCount%120===0){
    Soap=createSprite(525,220,20,20)

    Soap.addImage(SoapIMG)
    Soap.y=Math.round(random(150,220))
    Soap.velocityX=-2
    Soap.scale=0.15
    Soapgroup.add(Soap)
  }}



  function spawnVaccine(){
    
    if(frameCount%1500===0){
      Vaccine=createSprite(525,220,20,20)
      Vaccine.addImage(VaccineIMG)
      Vaccine.y=Math.round(random(100,160))
      Vaccine.velocityX=-4
      Vaccine.scale = 0.15
      VaccineGroup.add(Vaccine)





    }
  }



  function spawnCorona(){

    if(frameCount%130===0){
      Alpha = createSprite(525,290,20,20)
      Alpha.velocityX = -5
      rand = Math.round(random(1,3))
      CoronaGroup.add(Alpha)
      
      if(rand===1){
        Alpha.addImage(DeltaIMG)
        Alpha.scale = 0.08

      }
      else if(rand===2){
        Alpha.addImage(AlphaIMG)
        Alpha.scale = 0.045
      }
      else if (rand===3){
        Alpha.addImage(OmiIMG)
        Alpha.scale = 0.06
      }
      

    }
  }

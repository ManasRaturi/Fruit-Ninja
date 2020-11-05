var PLAY = 1;
var END = 0;
var gameState = PLAY;

var alien1, alien2, alienGroup, fruit1, fruit2, fruit3, fruit4, sword, score = 0, fruitImage1, fruitImage2, fruitImage3, fruitImage4, alienImage1, alienImage2, swordImage, gameOverImage,gameOverSound, swordGroup,orange,apple,pear,banana,swooshSound;

function preload(){
  alienImage1=loadImage("alien1.png");
  alienImage2=loadImage("alien2.png");
  fruitImage1=loadImage("fruit1.png");
  fruitImage2=loadImage("fruit2.png");
  fruitImage3=loadImage("fruit3.png");
  fruitImage4=loadImage("fruit4.png");
  swordImage=loadAnimation("sword.png");
  gameOverImage=loadAnimation("gameover.png");
  gameOverSound=loadSound("gameover.mp3");
  swooshSound=loadSound("Swoosh - Sound Effect.mp3")
}

function setup(){
  createCanvas(500,500);
  sword = createSprite(250,250,10,10);
  sword.addAnimation("sword",swordImage);
  sword.addAnimation("gameover",gameOverImage);
  sword.scale=0.7;
  fruit1 = new Group();
  fruit2 = new Group();
  fruit3 = new Group();
  fruit4 = new Group();
  alienGroup = new Group();
  swordGroup = new Group();
}
function draw(){
  background("lightblue");

  sword.setCollider("circle",0,0,40)

  text(score,450,30);
  text("Score",415,30);
  if (gameState == PLAY){
  sword.x = mouseX;
  sword.y = mouseY;
  spawnFruit1();
  spawnFruit2();
  spawnFruit3();
  spawnFruit4();
  spawnAlien1();
  spawnAlien2();
  }
  if (gameState == END){
  sword.changeAnimation("gameover",gameOverImage);
  sword.x=250;
  sword.y=250;
  fruit1.destroyEach();
  fruit2.destroyEach();
  fruit3.destroyEach();
  fruit4.destroyEach();
  alienGroup.destroyEach();
  }
  drawSprites();
 
}
function spawnFruit1(){
  if (frameCount % Math.round(random(80,100)) === 0){
   orange = createSprite(250,250,10,10);
   orange.addImage(fruitImage1);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: orange.x = -100
              orange.y = Math.round(random(10,490))
              orange.velocityX=(6+score/5)
              break;
      case 2: orange.x = 600
              orange.y = Math.round(random(10,490))
              orange.velocityX=(-6+score/5)
              break;
      case 3: orange.y = -100
              orange.x = Math.round(random(10,490))
              orange.velocityY=(6+score/5)
              break;
      case 4: orange.y = 600
              orange.x = Math.round(random(10,490))
              orange.velocityY=(-6+score/5)
              break;

      default: break;
    }
   orange.scale = 0.3;
   orange.lifetime=300;
   orange.setCollider("circle",0,0,100)
        fruit1.add(orange);
    if (fruit1.isTouching(sword)){
    fruit1.destroyEach();
    swooshSound.play();
    score=score+1
  }

}
}
function spawnFruit2(){
  if (frameCount % Math.round(random(80,100)) === 0){
   apple = createSprite(250,250,10,10);
   apple.addImage(fruitImage2);
   var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: apple.x = -100
              apple.y = Math.round(random(10,490))
              apple.velocityX=(6+score/5)
              break;
      case 2: apple.x = 600
              apple.y = Math.round(random(10,490))
              apple.velocityX=(-6+score/5)
              break;
      case 3: apple.y = -100
              apple.x = Math.round(random(10,490))
              apple.velocityY=(6+score/5)
              break;
      case 4: apple.y = 600
              apple.x = Math.round(random(10,490))
              apple.velocityY=(-6+score/5)
              break;

      default: break;
    }
   apple.scale = 0.3;
   apple.lifetime=300;
   apple.setCollider("circle",0,0,100)
        fruit2.add(apple);
    if (fruit2.isTouching(sword)){
    fruit2.destroyEach();
    swooshSound.play();
    score=score+1
  }

}
}
function spawnFruit3(){
  if (frameCount % Math.round(random(80,100)) === 0){
   pear = createSprite(250,250,10,10);
   pear.addImage(fruitImage3);
   var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: pear.x = -100
              pear.y = Math.round(random(10,490))
              pear.velocityX=(6+score/5)
              break;
      case 2: pear.x = 600
              pear.y = Math.round(random(10,490))
              pear.velocityX=(-6+score/5)
              break;
      case 3: pear.y = -100
              pear.x = Math.round(random(10,490))
              pear.velocityY=(6+score/5)
              break;
      case 4: pear.y = 600
              pear.x = Math.round(random(10,490))
              pear.velocityY=(-6+score/5)
              break;

      default: break;
    }
  
   pear.scale = 0.3;
   pear.lifetime=300;
   pear.setCollider("circle",0,0,100)
        fruit3.add(pear);
    if (fruit3.isTouching(sword)){
    fruit3.destroyEach();
    swooshSound.play();
    score=score+1
  }

}
}
function spawnFruit4(){
  if (frameCount % Math.round(random(80,100)) === 0){
   banana = createSprite(250,250,10,10);
   banana.addImage(fruitImage4);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: banana.x = -100
              banana.y = Math.round(random(10,490))
              banana.velocityX=(6+score/5)
              break;
      case 2: banana.x = 600
              banana.y = Math.round(random(10,490))
              banana.velocityX=(-6+score/5)
              break;
      case 3: banana.y = -100
              banana.x = Math.round(random(10,490))
              banana.velocityY=(6+score/5)
              break;
      case 4: banana.y = 600
              banana.x = Math.round(random(10,490))
              banana.velocityY=(-6+score/5)
              break;

      default: break;
    }
   banana.scale = 0.3;
   banana.lifetime=300;
   banana.setCollider("circle",0,0,120)
        fruit4.add(banana);
    if (fruit4.isTouching(sword)){
    fruit4.destroyEach();
    swooshSound.play();
    score=score+1
  }

}
}
function spawnAlien1(){
  if (frameCount % Math.round(random(80,100)) === 0){
   alien1 = createSprite(250,250,10,10);
   alien1.addImage(alienImage1);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: alien1.x = -100
              alien1.y = Math.round(random(10,490))
              alien1.velocityX=(6+score/5)
              break;
      case 2: alien1.x = 600
              alien1.y = Math.round(random(10,490))
              alien1.velocityX=(-6+score/5)
              break;
      case 3: alien1.y = -100
              alien1.x = Math.round(random(10,490))
              alien1.velocityY=(6+score/5)
              break;
      case 4: alien1.y = 600
              alien1.x = Math.round(random(10,490))
              alien1.velocityY=(-6+score/5)
              break;

      default: break;
    }
   alien1.scale = 1;
   alien1.lifetime=300;
   alien1.setCollider("circle",0,0,20)
        alienGroup.add(alien1);
    if (alienGroup.isTouching(sword)){
    gameOverSound.play();
    gameState = END
  }

}
}
function spawnAlien2(){
  if (frameCount % Math.round(random(80,100)) === 0){
   alien2 = createSprite(250,250,10,10);
   alien2.addImage(alienImage2);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: alien2.x = -100
              alien2.y = Math.round(random(10,490))
              alien2.velocityX=(6+score/5)
              break;
      case 2: alien2.x = 600
              alien2.y = Math.round(random(10,490))
              orange.velocityX=(-6+score/5)
              break;
      case 3: alien2.y = -100
              orange.x = Math.round(random(10,490))
              orange.velocityY=(6+score/5)
              break;
      case 4: alien2.y = 600
              alien2.x = Math.round(random(10,490))
              alien2.velocityY=(-6+score/5)
              break;

      default: break;
    }
   alien2.scale = 1;
   alien2.lifetime=300;
   alien2.setCollider("circle",0,0,20)
        alienGroup.add(alien2);
    if (alienGroup.isTouching(sword)){
    gameOverSound.play();
    gameState = END
  }

}
}
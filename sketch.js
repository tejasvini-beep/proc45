var  street,  streetImg, running, runningImgs;
var  heartImg, heartGroup;
var armyBombImg, armyBombGroup;


function preload () {
  streetImg= loadImage("./images/street.jpg");
  runningImgs= loadAnimation("images/running1.png", "images/running2.png", "images/running3.png", "images/running4.png", "images/running5.png", "images/running6.png", "images/running7.png");
  heartImg= loadImage("images/heart.png");
  armyBombImg=loadImage("images/armybomb.png");
}

function setup() {
  createCanvas(800,400);
  running= createSprite(50, 320, 50, 50);
  running.addAnimation("btsRunning", runningImgs);
  running.scale= 0.5;
  running.frameDelay = 10;
  running.vilocityY= 100;

  
  heartGroup= new Group();
  armyBombGroup= new Group();
  
 
  
}

function draw() {
  background("black"); 
  image(streetImg, 0, 0, 800, 400);
  imageMode(CENTER);
  drawSprites();

  spawnHeart();
  spawnBomb();
  heartGroup.setLifetimeEach(-1);
  armyBombGroup.setLifetimeEach(-1);
}


function spawnHeart() {
  if (frameCount % 100 === 0) {
    var heart = createSprite(700,height-95,22,40);
    heart.x= Math.round(random(50,220));
    heart.addImage(heartImg);
    heart.scale = 0.05;
    heart.lifetime = 300;
    heartGroup.add(heart);
  }
  
}

function spawnBomb() {
  if (frameCount % 100 === 0) {
    var bomb = createSprite(400,height-50,20,30);
    bomb.x= Math.round(random(50,220));
    bomb.addImage(armyBombImg);
    bomb.scale = 0.1;
    bomb.lifetime = 300;
    armyBombGroup.add(bomb);
  }
  
}


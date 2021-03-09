var database,position;
var balloon,balloon1,balloon2,balloon3;

function preload(){
  balloon1=loadImage('Hot Air Ballon-02.png');
  balloon2=loadImage('Hot Air Ballon-03.png');
  balloon3=loadImage('Hot Air Ballon-04.png');
  bgimg=loadImage('Hot Air Ballon-01.png');
}

function setup() {

  
  console.log(database);
  var canvas=createCanvas(1200,800);

  balloon=createSprite(600,300,50,50);
  balloon.addImage(balloon1);
  balloon.scale=balloon.scale -0.2;
}

function draw() {
  background(bgimg); 

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }
  
  //if(keyDown(UP_ARROW)){
    //updateHeight(0,-10);
    //balloon.addAnimation(balloon1,balloon2,balloon3);
   // balloon.scale=balloon.scale-0.01;
  //}

  drawSprites();
}

//function updateHeight(x,y){
  //database = firebase.database();
  //database.ref('balloon/height').set({
   // 'x': height.x + x,
   // 'y': height.y + y
 // })
//}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log('Error in writing the database');
}

function position(){
  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on('value',readPosition,showError);
}




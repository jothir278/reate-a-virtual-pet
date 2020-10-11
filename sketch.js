//Create variables here
var dog,dogImage;

var happyDog;

var database;

var food;

var foodS;

var foodStock;


function preload()
{
  //load images here
  dogImage = loadImage("images/dogimg.png");
  dog2=loadImage("images/dogimg1.png");


}

function setup() {

  database=firebase.database();

  foodStock=database.ref('food');

  foodStock.on("value",readStock);

	createCanvas(500, 500);
  
  dog =createSprite(250,250,30,30);
  dog.addImage(dogImage);

  dog.scale=0.2;

  
}
function readStock (data){
  food=data.val();

  console.log(food);

  food.x;
  food.y;
}

function writeStock(){

  if(x<=0){
    x=0

  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x,
  })
}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog);
  }

  dog.display();

 
  drawSprites();
  //add styles here


}
function changePosition(x,y){
  positionRef.update({
      'x': food.x + x,
      'y': food.y + y
  });
}




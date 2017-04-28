var lazy = 1;

var triangleOrientation;
var triangleOrientation2;
var triangleOrientation3;
var triangleOrientation4;
var triangleOrientation5;

var lockTriangleOrientation;
var lockTriangleOrientation2;
var lockTriangleOrientation3;
var lockTriangleOrientation4;
var lockTriangleOrientation5;

var triangleX;
var triangleY;
var triangleX2;
var triangleY2;
var triangleX3;
var triangleY3;
var triangleX4;
var triangleY4;
var triangleX5;
var triangleY5;

var triangleDistance;
var triangleDistance2;
var triangleDistance3;
var triangleDistance4;
var triangleDistance5;

var lock;
var lock2;
var lock3;
var lock4;
var lock5;

var stickLocation1X;
var stickLocation1Y;
var stickLocation2X;
var stickLocation2Y;
var stickLocation3X;
var stickLocation3Y;

var permenantLock1;
var permenantLock2;
var permenantLock3;
var permenantLock4;
var permenantLock5;

var maze;
var goldsizex = 150;
var goldsizey = 150;
var goldatinv = 0;


canvas = 0;

function setup()
{
  createCanvas(700,600);
  triangleOrientation = 1;
  triangleOrientation2 = 2;
  triangleOrientation3 = 1;
  triangleOrientation4 = 0;
  triangleOrientation5 = 0;

  triangleX = 100;
  triangleY = 100;
  triangleX2 = 300;
  triangleY2 = 100;
  triangleX3 = 500;
  triangleY3 = 300;
  triangleX4 = 50;
  triangleY4 = 350;
  triangleX5 = 300;
  triangleY5 = 200;



  triangleDistance = 1000;
  triangleDistance2 = 1000;
  triangleDistance3 = 1000;
  triangleDistance4 = 1000;
  triangleDistance5 = 1000;

  lock = false;
  lock2 = false;
  lock3 = false;
  lock4 = false;
  lock5 = false;

  lockTriangleOrientation = false;
  lockTriangleOrientation2 = false;
  lockTriangleOrientation3 = false;
  lockTriangleOrientation4 = false;
  lockTriangleOrientation5 = false;

  stickLocation1X = 305;
  stickLocation1Y = 300;
  stickLocation2X = 195;
  stickLocation2Y = 245;
  stickLocation3X = 215;
  stickLocation3Y = 372;
  stickLocation4X = 305;
  stickLocation4Y = 285;
  stickLocation5X = 400;
  stickLocation5Y = 130;

  permenantLock1 = false;
  permenantLock2 = false;
  permenantLock3 = false;
  permenantLock4 = false;
  permenantLock5 = false;

  moveGoldx = 220;
  moveGoldy = 150;

}

function preload()
{
  Gold = loadImage('https://dl.dropboxusercontent.com/s/x1mt1n2eqywabny/Coin2.png');  
  IntroJ =  loadImage('https://dl.dropboxusercontent.com/s/adi59zn0kxdwjsd/Japan%20Castle.jpg');
}


function draw()
{

  if (canvas == 1)
  {
    c1();
  }
  else if (canvas == 2)
  {
    c2();
  }
  else if (canvas == 3)
  {
    c3();
  }
  else
  {
    intro();
  }
  
}

function intro()
{

  background(50,150,150);
  image(IntroJ,0,0,700,700);
  
  fill(255,0,0);
  rect(250,300,200,50);
  stroke(0,0,0);
  text('START',250,250);
  

  if(mouseIsPressed)
  {
    canvas = 1;
  }
}


function c1()
{
  background(69,69,69);
  if (mouseIsPressed)
  {
    canvas = 2;
  }
}

function c2()
{
  background(255,255,255);         

  //outline puzle 
  fill(204,102,0);
  stroke(113,70,0);
  strokeWeight(9);
  rect(10,10,570,480);

  strokeWeight(1);
  showHelpText();

  if (permenantLock1 == false)
  {
    moveTriangle1();
    changeTriangleOrientation1();
  }
  drawTriangle1();


  if (permenantLock2 == false)
  {
    moveTriangle2();
    changeTriangleOrientation2();
  }

  drawTriangle2();

  if (permenantLock3 == false)
  {
    moveTriangle3();
    changeTriangleOrientation3();
  }
  drawTriangle3();

  if (permenantLock4 == false)
  {
    moveTriangle4();
    changeTriangleOrientation4();
  }
  drawTriangle4();

  if (permenantLock5 == false)
  {
    moveTriangle5();
    changeTriangleOrientation5();
  }
  drawTriangle5();
  itemGrid();
  reward();

}

function c3()
{
  background(12,123,254);
  
  
  itemGrid();
}

function itemGrid()
{
  fill(50,50,50);
  rect(5,493,720,85);
  fill(125,125,125);
  rect(20,500,70,70);
  fill(125,125,125);
  rect(100,500,70,70);
  fill(125,125,125);
  rect(180,500,70,70);
}


function showHelpText()
{
  fill(0,0,0);
  stroke(0,0,0);
  text("Click and drag objects to move them around",15,25);
  text("Hold 'r' and left click on object to rotate",15,40);
  text("Helper: ",15,60);
}

function moveTriangle1()
{

  fill(153,76,0);
  triangleDistance = sqrt((triangleX-mouseX)*(triangleX-mouseX)+(triangleY-mouseY)*(triangleY-mouseY))

  if (triangleDistance < 30)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false)
    {
      lock = true;
    }
  }

  if (lock == true)
  {
    fill(255,255,0);
    triangleX = mouseX;
    triangleY = mouseY;

    stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY))

    text(stickDistance,57,60);


    if (triangleOrientation == 1 && stickDistance < 25)
    {
      triangleX = stickLocation1X;
      triangleY = stickLocation1Y;
      permenantLock1 = true;
    }
  }

}

function moveTriangle2()
{
  fill(153,76,0);
  triangleDistance2 = sqrt((triangleX2-mouseX)*(triangleX2-mouseX)+(triangleY2-mouseY)*(triangleY2-mouseY))

  if (triangleDistance2 < 30)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false)
    {
      lock2 = true;
    }
  }

  if (lock2 == true)
  {
    fill(255,255,0);
    triangleX2 = mouseX;
    triangleY2 = mouseY;

    stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY))

    text(stickDistance2,57,60);

    if (triangleOrientation2 == 1 && stickDistance2 < 25)
    {
      fill(255,255,0);
      triangleX2 = stickLocation2X;
      triangleY2 = stickLocation2Y;
      permenantLock2 = true;
    }
  }

}

function moveTriangle3()
{
  fill(153,76,0);

  trangleDistance3 = sqrt((triangleX3-mouseX)*(triangleX3-mouseX)+(triangleY3-mouseY)*(triangleY3-mouseY))

  if (triangleDistance3 < 30)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false)
    {
      lock3 = true;
    }
  }


  if (lock3 == true)
  {
    fill(255,255,0);
    triangleX3 = mouseX;
    triangleY3 = mouseY;
    stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY))

    text(stickDistance3,57,60);

    if (triangleOrientation3 == 1 && stickDistance3 < 25)
    {
      fill(255,255,0);
      triangleX3 = stickLocation3X;
      triangleY3 = stickLocation3Y;
      permenantLock3 = true;
    }
  }

}

function moveTriangle4()
{
  fill(153,76,0);

  trangleDistance4 = sqrt((triangleX4-mouseX)*(triangleX4-mouseX)+(triangleY4-mouseY)*(triangleY4-mouseY))

  if (triangleDistance4 < 80)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false)
    {
      lock4 = true;
    }
  }

  if (lock4 == true)
  {
    fill(255,255,0);
    triangleX4 = mouseX;
    triangleY4 = mouseY;
    stickDistance4 = sqrt((stickLocation4X-mouseX)*(stickLocation4X-mouseX)+(stickLocation4Y-mouseY)*(stickLocation4Y-mouseY))

    text(stickDistance4,57,60);

    if (triangleOrientation4 == 2 && stickDistance4 < 25)
    {
      fill(255,255,0);
      triangleX4 = stickLocation4X;
      triangleY4 = stickLocation4Y;
      permenantLock4 = true;
    }
  }

}

function moveTriangle5()
{
  fill(153,76,0);

  trangleDistance5 = sqrt((triangleX5-mouseX)*(triangleX5-mouseX)+(triangleY5-mouseY)*(triangleY5-mouseY))

  if (triangleDistance5 < 80)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false && lock5 == false)
    {
      lock5 = true;
    }
  }

  if (lock5 == true)
  {
    fill(255,255,0);
    triangleX5 = mouseX;
    triangleY5 = mouseY;
    stickDistance5 = sqrt((stickLocation5X-mouseX)*(stickLocation5X-mouseX)+(stickLocation5Y-mouseY)*(stickLocation5Y-mouseY))

    text(stickDistance5,57,60);

    if (triangleOrientation5 == 0 && stickDistance5 < 25)
    {
      fill(255,255,0);
      triangleX5 = stickLocation5X;
      triangleY5 = stickLocation5Y;
      permenantLock5 = true;
    }

  }

}



function changeTriangleOrientation1()
{
  triangleDistance = sqrt((triangleX-mouseX)*(triangleX-mouseX)+(triangleY-mouseY)*(triangleY-mouseY))

  if (triangleDistance < 30)
  {


    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation == false)
    {
      triangleOrientation = triangleOrientation + 1;
      if (triangleOrientation > 2)
        triangleOrientation = 0;

      lockTriangleOrientation = true;
    }
  }


}

function changeTriangleOrientation2()
{
  triangleDistance2 = sqrt((triangleX2-mouseX)*(triangleX2-mouseX)+(triangleY2-mouseY)*(triangleY2-mouseY))

  if (triangleDistance2 < 30)
  {


    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation2 == false)
    {
      triangleOrientation2 = triangleOrientation2 + 1;
      if (triangleOrientation2 > 2)
        triangleOrientation2 = 0;

      lockTriangleOrientation2 = true;
    }
  }


}

function changeTriangleOrientation3()
{

  triangleDistance3= sqrt((triangleX3-mouseX)*(triangleX3-mouseX)+(triangleY3-mouseY)*(triangleY3-mouseY))

  if (triangleDistance3 < 30)
  {


    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation3 == false)
    {
      triangleOrientation3 = triangleOrientation3 + 1;
      if (triangleOrientation3 > 2)
        triangleOrientation3 = 0;

      lockTriangleOrientation3 = true;
    }
  }

}

function changeTriangleOrientation4()
{
  triangleDistance4= sqrt((triangleX4-mouseX)*(triangleX4-mouseX)+(triangleY4-mouseY)*(triangleY4-mouseY))

  if (triangleDistance4 < 100)
  {


    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation4 == false)
    {
      triangleOrientation4 = triangleOrientation4 + 1;
      if (triangleOrientation4 > 2)
        triangleOrientation4 = 0;

      lockTriangleOrientation4 = true;
    }
  }


}

function changeTriangleOrientation5()
{
  triangleDistance5= sqrt((triangleX5-mouseX)*(triangleX5-mouseX)+(triangleY5-mouseY)*(triangleY5-mouseY))

  if (triangleDistance5 < 100)
  {


    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation5 == false)
    {
      triangleOrientation5 = triangleOrientation5 + 1;
      if (triangleOrientation5 > 2)
        triangleOrientation5 = 0;

      lockTriangleOrientation5 = true;
    }
  }


}



function mouseReleased()
{
  if (lock)
  {
    lock = false;
    d = sqrt((triangleX-triangleX2)*(triangleX-triangleX2)-(triangleY-triangleY2)*(triangleY-triangleY2));
    if (d < 100)
    {
      //         triangleX = triangleX2-100;
      //         triangleY = triangleY2-100;
    }
  }

  if (lock2)
  {
    lock2 = false;
    d = sqrt((triangleX-triangleX2)*(triangleX-triangleX2)-(triangleY-triangleY2)*(triangleY-triangleY2));
    if (d < 100)
    {
      //        triangleX2 = triangleX-100;
      //        triangleY2 = triangleY-100;
    }
  }

  if (lock3)
  {
    lock3 = false;
    d = sqrt((triangleX2-triangleX3)*(triangleX2-triangleX3)-(triangleY2-triangleY3)*(triangleY2-triangleY3));
    if (d < 100)
    {
      // triangleX3 = triangleX2-100;
      // triangleY3 = triangleY2-100;
    }
  }

  if (lock4)
  {
    lock4 = false;
    d = sqrt((triangleX3-triangleX4)*(triangleX3-triangleX4)-(triangleY3-triangleY4)*(triangleY3-triangleY4));
    if (d < 100)
    {
      // triangleX4 = triangleX3-100;
      // triangleY4 = triangleY3-100;
    }
  } 


  if (lock5)
  {
    lock5 = false;
    d = sqrt((triangleX4-triangleX5)*(triangleX4-triangleX5)-(triangleY4-triangleY5)*(triangleY4-triangleY5));
    if (d < 100)
    {
      // triangleX5 = triangleX4-100;
      // triangleY5 = triangleY4-100;
    }
  }


  if (lockTriangleOrientation == true)
  {
    lockTriangleOrientation = false;
  }

  if (lockTriangleOrientation2 == true)
  {
    lockTriangleOrientation2 = false;
  }

  if (lockTriangleOrientation3 == true)
  {
    lockTriangleOrientation3 = false;
  }

  if (lockTriangleOrientation4 == true)
  {
    lockTriangleOrientation4 = false;
  }

  if (lockTriangleOrientation5 == true)
  {
    lockTriangleOrientation5 = false;
  }

}

function drawTriangle1()
{
  fill(153,76,0);

  if (triangleOrientation == 0)
  {
    triangle(triangleX+50,triangleY-50,triangleX-50,triangleY+25,triangleX+50,triangleY+25);
  }

  if (triangleOrientation == 1)
  {
    triangle(triangleX+60,triangleY+50,triangleX-50,triangleY-40,triangleX-50,triangleY+50);
  }

  if (triangleOrientation == 2)
  {
    triangle(triangleX+50,triangleY+70,triangleX-50,triangleY-25,triangleX+50,triangleY-25);
  }

}

function drawTriangle2()
{
  fill(153,76,0);

  if (triangleOrientation2 == 0)
  {
    triangle(triangleX2,triangleY2-50,triangleX2-100,triangleY2+25,triangleX2+100,triangleY2+25);
  }

  if (triangleOrientation2 == 1)
  {
    triangle(triangleX2+60,triangleY2-120,triangleX2-50,triangleY2-20 ,triangleX2+60,triangleY2+105);
  }

  if (triangleOrientation2 == 2)
  {
    triangle(triangleX2,triangleY2+50,triangleX2-100,triangleY2-25,triangleX2+98,triangleY2-25);
  }
}
function drawTriangle3()
{
  fill(153,76,0);

  if (triangleOrientation3 == 0)
  {
    triangle(triangleX3-10,triangleY3-30,triangleX3-40,triangleY3+10,triangleX3+70,triangleY3+10)
  }

  if (triangleOrientation3 == 1)
  {
    triangle(triangleX3+40,triangleY3-25,triangleX3,triangleY3-68,triangleX3,triangleY3+50);
  }

  if (triangleOrientation3 == 2)
  {
    triangle(triangleX3+10,triangleY3+40,triangleX3-60,triangleY3-5,triangleX3+60,triangleY3-5);
  }

}

function drawTriangle4()
{
  fill(153,76,0);
  if (triangleOrientation4 == 0)
  {
    triangle(triangleX4-25,triangleY4-50,triangleX4-25,triangleY4+130,triangleX4+150,triangleY4+130);
  }

  if (triangleOrientation4 == 1)
  {
    triangle(triangleX4+130,triangleY4+100,triangleX4+130,triangleY4-50,triangleX4-50,triangleY4+100);
  }

  if (triangleOrientation4 == 2)
  {
    triangle(triangleX4+130,triangleY4+130,triangleX4-50,triangleY4-25,triangleX4+130,triangleY4-25);
  }

}

function drawTriangle5()
{
  fill(153,76,0);
  if (triangleOrientation5 == 0)
  {
    triangle(triangleX5-25,triangleY5-50,triangleX5-25,triangleY5+130,triangleX5+150,triangleY5+130);
  }

  if (triangleOrientation5 == 1)
  {
    triangle(triangleX5+130,triangleY5+100,triangleX5+130,triangleY5-50,triangleX5-50,triangleY5+100);
  }

  if (triangleOrientation5 == 2)
  {
    triangle(triangleX5+130,triangleY5+130,triangleX5-50,triangleY5-25,triangleX5+130,triangleY5-25);
  }
}



function maze()
{
  stroke(0,0,0);
  rect(100,100,100,100);
}

function reward()
{
  circleGold = sqrt((mouseX-285)*(mouseX-285)+(mouseY-225)*(mouseY-225));
  fill(0,0,0);
  //permenantLock1 == true && permenantLock2 == true && permenantLock3 == true && permenantLock4 == true && permenantLock5 == true
  if (lazy == 1)
  {
    //    GoldState = 0;
    
    
    
    text(circleGold,10,100);
    image(Gold,moveGoldx,moveGoldy,goldsizex,goldsizey); 
    if (circleGold < 75)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        moveGoldx = 30;
        moveGoldy = 515;
        goldsizex = 50;
        goldsizey = 50;
        goldatinv = 1;
      }

    }
    else 
    {
      cursor(ARROW);
    }
  }
  
  if (goldatinv == 1)
  {
    fill(255,50,50);
    if (mouseX >= 475 && mouseX <= 575 && mouseY >= 15 && mouseY <= 60)
    {
      fill(255,100,100);
      cursor(HAND);
      if (mouseIsPressed)
      {
        canvas = 3;
      }
    }
    else
    {
      cursor(ARROW);
    }

    rect(475,15,100,45);
    
    fill(0,0,0);
    text("X",520,45);
  }
}



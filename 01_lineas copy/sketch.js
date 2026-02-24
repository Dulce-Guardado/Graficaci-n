let y=0; 
let velocidad=5;
function setup() 
{
  createCanvas(400, 200);
}

function draw() 
{
    background(180);
    frameRate(30);
  circle(200,y,40);
  y+=velocidad;
  if(y>height||y<0)
  {
    velocidad= -velocidad;
  }

  //line(30,20,185,185);
  //line(0,250,800,250 );
  //line(400,0,400,800 );
  //line(0,0,1280,800 );
  //line(0,500,800,0 );
  //circle (400,250,50);
  //fill(100,40,200);

  //stroke(0);
  //line(30,20,185,20 );
  //stroke(126);
  //noStroke();

  //line(30,20,185,20 );
  //line(185,20,185,175 );
  //stroke(255);
  //line(185,175,30,175 );
  //line(30,175,30,20 );
}
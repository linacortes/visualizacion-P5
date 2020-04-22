var figuraspr;



function setup() {
 
  // Define un lienzo de 720 pixeles de ancho y 400 de alto
  createCanvas(720, 400);
 // createCanvas(720, 320);
  
  noStroke();

 // fill(80,90,79);
 // triangle(18, 18, 18, 360, 81, 360);
 // fill(80,90,20);
 // triangle(430, 70, 400, 200, 220, 250);

  //fill(102);
 // rect(220, 81, 80, 63);

  //fill(204);
  //quad(400, 30, 216, 30, 216, 380, 144, 350);


 

}


function draw() {
 background(7,56,41);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, 0.50);
  c2 = lerpColor(from, to, 0.100);
  for (let i = 0; i < 15; i++) {
    fill(10,10,10);
    quad(
      random(-10, 320), random(height),
      random(-10, 320), random(height),
      random(-10, 320), random(height),
      random(-10, 320), random(height)
    );
    fill(24,223,116);
    quad(
      random(160, 380), random(height),
      random(120, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height)
    );
    fill(24,223,116);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height)
    );
    fill(10,10,10);
    quad(
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height)
    );

  fill(237,213,197);
  ellipse(355, 200, 200, 200);
  fill(255);
  ellipse(330, 155, 50, 50);
  ellipse(375, 155, 50, 50);
  fill(2,2,2);
  ellipse(375, 155, 20, 20);
  ellipse(325, 155, 20, 20);
  fill(92,45,9);
ellipse(353, 200,40, 30);
ellipse(250, 105, 90, 90);
ellipse(460, 105, 90, 90);
fill(237,213,197);
ellipse(460, 105, 40, 40);
ellipse(250, 105, 40, 40);
  //fill(204);
 //triangle(400, 30, 351, 20, 200, 360);
 fill(92,45,9);
  arc(355, 400, 180, 200, PI, TWO_PI);

  fill(237,213,197);
  arc(355, 400, 180, 150, PI, TWO_PI);
  
fill(237,213,197);
ellipse(460, 375, 50, 50);
ellipse(250, 375, 50, 50);

 fill(92,45,9);
ellipse(460, 340, 20, 20);
ellipse(488, 355, 20, 20);
ellipse(494, 385, 20, 20);
ellipse(460, 375, 30, 30);
ellipse(250, 375, 30, 30);
ellipse(250, 340, 20, 20);
ellipse(220, 355, 20, 20);
ellipse(215, 385, 20, 20);

  }
  frameRate(5);
}

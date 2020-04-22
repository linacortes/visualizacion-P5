let f;
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(236,101,19);

  push();

  translate(width * 0.50, height * 0.30);
  rotate(frameCount / 200.0);
  polygon(0, 0, 90, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);
  pop();

   push();
  translate(width * 0.53, height * 0.40);
  rotate(frameCount / 50.0);
  polygon(0, 0, 20, 20);
  pop();


 push();
  translate(width * 0.48, height * 0.40);
  rotate(frameCount / 50.0);
  polygon(0, 0, 20, 20);
  pop();

  push();
  translate(width * 0.8, height * 0.60);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

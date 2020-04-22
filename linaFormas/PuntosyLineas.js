var figura;
var angle = 0;
var playMode = 'sustain';
var sample;
function setup() {
  soundFormats('mp3', 'ogg');
  sample = loadSound('assets/Damscray_-_Dancing_Tiger_02.mp3');

  let d = 20;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;
  let p5 = p4 + d;
  let p6 = p5 + d;
  let p7 = p6 + d;
  let p8 = p7 + d;
  let p9 = p8+ d;
  let p10 = p9 + d;
  let p11 = p10 + d;
  let p12 = p11+ d;
  let p13 = p12+ d;
  let p14 = p13+ d;
  let p15 = p14+ d;
  let p16 = p15+ d;
  let p17 = p16+ d;
  let p18 = p17+ d;
  let p19 = p18+ d;
  let p20 = p19+ d;
  let p21 = p20+ d;
  let p22 = p21+ d;
  let p23 = p22+ d;
  let p24 = p23+ d;
  let p25 = p24+ d;


  // Define el lienzo de 720 pixeles de ancho y 400 de alto
  createCanvas(720, 400);
  background(14,8,80);
  noSmooth();

  translate(140, 0);

  // Dibuja una caja gris
  stroke(247,246,14);
  line(p1,p1,p1,p4);
  line(p1,p1,p2,p1);
  line(p2,p2,p2,p3);
  line(p2,p1,p2,p2);
  line(p2,p3,p4,p3);
  line(p1,p4,p4,p4);
  line(p4,p3,p4,p4);
  line(p4,p5,p5,p5);//
  line(p4,p5,p4,p8);
  line(p5,p5,p5,p8);
  line(p4,p8,p5,p8);
  line(p6,p9,p5,p9);//
  line(p5,p9,p5,p13);
  line(p6,p9,p8,p11);
  line(p9,p9,p8,p9);
  line(p8,p11,p8,p9);
  line(p5,p13,p6,p13);
  line(p6,p10,p6,p13);
  line(p6,p10,p8,p13);
  line(p8,p13,p9,p13);
  line(p9,p9,p9,p13)
  line(p10,p14,p11,p14);
  line(p11,p14,p14,p19);
  line(p10,p14,p8,p19);
  line(p9,p19,p8,p19);
  line(p14,p19,p13,p19);
  line(p10,p16,p9,p19);
  line(p11,p16,p10,p16);
  line(p13,p19,p11,p16);

}
function draw() {
  // Dibujar solo cuando se presiona el mouse

  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 2000) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(14,247,238);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(0,10,0);
    ellipse(mouseX, mouseY, 2, 2);
  }
}

function setup() {
  createCanvas(1000, 800);
  background(0);
  x1 = 150;
  y1 = 400;
  g1 = 20;
  h1 = 250;

  x2 = 80;
  y2 = 400;
  g2 = 20;
  h2 = 20;

  for(let i = 0; i < 3; i++)
  {
    fill(255,255,255);
    ellipse(150+i*270, 400, 180, 300);
    ellipse(230+i*270, 400, 180, 300);

    fill(0, 0, 0);
    ellipse(83+i*270, 400, 40, 40);
    ellipse(163+i*270, 400, 40, 40);
  }
}
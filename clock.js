function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-canvas');
}

function draw() {
  background(220);

  var h = map(hour(), 0, 12, 0, TWO_PI)-HALF_PI; // shift arc to mimic orientation of a clock
  var m = map(minute(), 0, 60, 0, TWO_PI)-HALF_PI;
  var s = map(second(), 0, 60, 0, TWO_PI)-HALF_PI;

  var top_of_clock = 0-HALF_PI;
  noFill();
  stroke('#f5b0cb');
  strokeWeight(10);
  arc(200, 200, 100, 100, top_of_clock, s);

  stroke('#d597ce');
  strokeWeight(10);
  arc(200, 200, 200, 200, top_of_clock, m);

  stroke('#745c97');
  strokeWeight(10);
  arc(200, 200, 300, 300, top_of_clock, h);
}

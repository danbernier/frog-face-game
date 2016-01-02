function setup() {
  createCanvas(700, 500);

  // p5js creates its own canvas, and doesn't seem willing to let you place your own.
  // This is the easiest/simplest way I've found to put your sketch canvas where you want it:
  // let p5js create it, then move it to where you want it.
  $('#sketchHolder').append($('#defaultCanvas0'));
  stroke(30, 128);
}

function draw() {
  ellipse(mouseX, mouseY, 30, 30);
}

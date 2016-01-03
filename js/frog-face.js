var tongue;
var flies;
var fliesEaten = 0;

function setup() {
  createCanvas(700, 500);

  // p5js creates its own canvas, and doesn't seem willing to let you place your own.
  // This is the easiest/simplest way I've found to put your sketch canvas where you want it:
  // let p5js create it, then move it to where you want it.
  $('#sketchHolder').append($('#defaultCanvas0'));

  tongue = createSprite(width/2, height/2, 70, 70);
  flies = new Group();

  for (var i = 0; i < 50; i++) {
    addFlySprite();
  }
}

function addFlySprite() {
  var s = createSprite(random(width), random(height), 15, 15);
  s.target = [random(width), random(height)];  // Yes! JS prototypes ftw.
  s.addAnimation("flapping", "imgs/fly1.png", "imgs/fly2.png");
  flies.add(s);
}

function draw() {
  // update game logic

  if (frameCount % 10 == 0) {
    if (flies.length < 30) {
      for (var i = 0; i < 1; i++) {
        addFlySprite();
      }
    }
  }

  // render logic

  background(255);

  for (var i = 0; i < flies.length; i++) {
    var s = flies[i];
    s.setSpeed(3, s.getDirection() + 5);

    s.attractionPoint(0.5, s.target[0], s.target[1]);

    if (dist(s.target[0], s.target[1], s.position.x, s.position.y) < 30) {
      s.target = [random(width), random(height)];
    }
  }

  tongue.position.set(mouseX, mouseY);
  tongue.overlap(flies, eatAFly);

  drawSprites();

  fill(0);
  text(fliesEaten * 10, 20, 20);
}

function eatAFly(tongue, fly) {
  fly.remove();
  fliesEaten++;
}

function keyPressed() {
  if (key == 'X') {
    for (var i = 0; i < flies.length; i++) {
      var s = flies[i];
      var mag = dist(s.position.x, s.position.y, width/2, height/2);
      s.attractionPoint(mag * 0.05, width/2, height/2);
      s.maxSpeed = 5;
    }
  }
>>>>>>> 1bd45f0a44edc32253523d135a6fd1563e6338fb
}

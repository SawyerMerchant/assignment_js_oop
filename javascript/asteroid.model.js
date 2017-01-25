var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;


// does not work - Asteroid does not inherit tic
// Object.setPrototypeOf( model.Asteroid, model.Moveable.prototype);

model.SIZE = {
  small:  (model.canvas.width / 100),
  medium: (model.canvas.width / 50),
  large:  (model.canvas.width / 25)
};

model.getSize = function(size) {
  var asteroidSize;
  switch(size) {
    case "small":
      asteroidSize = model.SIZE.small;
      break;
    case "medium":
      asteroidSize = model.SIZE.medium;
      break;
    case "large":
      asteroidSize = model.SIZE.large;
      break;
  }
  return asteroidSize;
};

model.Asteroid = function(size){
  model.Moveable.call(this);
  this.moveableType = "asteroid";
  var aSize = model.getSize(size);
  view.renderAsteroid(this.xCoord, this.yCoord, aSize);
};
model.Asteroid.prototype = Object.create(model.Moveable.prototype);
model.Asteroid.prototype.constructor = model.Asteroid;

model.makeCoordinate = function(edge) {
  return Math.floor(Math.random() * edge);
};
model.makeSpeed = function() {
  return Math.floor(Math.random() * (model.canvas.height / 10));
};

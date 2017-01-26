var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
model.asteroidList = [];


// does not work - Asteroid does not inherit tic
// Object.setPrototypeOf( model.Asteroid, model.Moveable.prototype);

model.sizeDenominator = {
  small:  100,
  medium: 50,
  large:  25
};

model.Asteroid = function(size){
  model.Moveable.call(this);
  // this.moveableType = "asteroid";
  this.width = canvas.width / model.sizeDenominator.large;
  model.asteroidList.push(this);
  this.img = new Image();
  this.img.src = 'images/Asteroid.png';
  view.renderObject(this);
};
model.Asteroid.prototype = Object.create(model.Moveable.prototype);
model.Asteroid.prototype.constructor = model.Asteroid;

model.makeCoordinate = function(edge) {
  return Math.floor(Math.random() * edge);
};
model.makeSpeed = function() {
  var maxSpeed = (model.canvas.height / 10);
  var minSpeed = maxSpeed * -1;
  return minSpeed + Math.floor(Math.random() * (maxSpeed - minSpeed));
};

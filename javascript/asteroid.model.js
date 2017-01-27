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
  this.width = model.canvas.width / model.sizeDenominator.large;
  //TODO refactor to make size above tranlate to large bellow
  this.width = model.canvas.width / model.sizeDenominator.large;
  this.img = new Image();
  this.img.src = 'images/Asteroid.png';
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

model.generateAsteroids = function(num) {
  // var newAsteroid;
  for (var a = 0; a < num; a++) {
    model.asteroidList.push(new model.Asteroid());
  }
};

model.ticAsteroids = function() {
  for (var rock = 0; rock < model.asteroidList.length; rock++) {
    model.asteroidList[rock].tic();
  }
};

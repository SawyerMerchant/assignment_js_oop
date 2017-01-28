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
  this.img = new Image();
  this.img.src = 'images/Asteroid.png';

  this.checkCrash = function(obj) {
    var render = true;

    // check for collision
    checkCrashWithShip(obj);
    // if collision with ship, end game - save for last for debugging

    // if collision with bullet, split, render pieces, destroy bullet


    return render;
  };

  var checkCrashWithShip = function(obj) {
    // assuming the coords are in the center of images
    var xDistance = Math.abs(obj.xCoord - controller.ship.xCoord);
    var yDistance = Math.abs(obj.yCoord - controller.ship.yCoord);
    var size = obj.width / 2;
    console.log('xdistance = ' + xDistance + ' yDistance = ' + yDistance + ' size = ' + size);
    if (xDistance < size && yDistance < size) {
      console.error('Crash');
    }
  };
};
model.Asteroid.prototype = Object.create(model.Moveable.prototype);
model.Asteroid.prototype.constructor = model.Asteroid;

// TODO make a class method
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

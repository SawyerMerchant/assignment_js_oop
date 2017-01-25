var Asteroids = Asteroids || {};
var model = Asteroids.model = {};
var canvas = {};
canvas.height = 800;
canvas.width = 1000;


model.Asteroid = function() {
  this.xCoord = model.makeCoordinate(canvas.width);
  this.yCoord = model.makeCoordinate(canvas.height);
  this.xVel = model.makeSpeed();
  this.yVel = model.makeSpeed();
};


model.Asteroid.prototype.tic = function() {
  this.xCoord += this.xVel;
  this.yCoord -= this.yVel;
  //for benchmarking
  console.log(this.xCoord + " " + this.yCoord);
};

model.AsteroidBuilder = function() {
  var result = {};
  result.xCoord = model.makeCoordinate(canvas.width);
  result.yCoord = model.makeCoordinate(canvas.height);
  result.xVel = model.makeSpeed();
  result.yVel = model.makeSpeed();

  result.tic = function () {
    this.xCoord += this.xVel;
    this.yCoord -= this.yVel;
    //for benchmarking
    console.log(this.xCoord + " " + this.yCoord);
  };
  return result;
};

model.makeCoordinate = function(edge) {
  return Math.random() * edge;
};

model.makeSpeed = function() {
  return Math.random() * (canvas.height / 10);
};

model.benchmark = function(iterations) {
  var startBuild = new Date();
  for (var i = 0; i < iterations; i++) {
    new model.Asteroid();
  }
  var endBuild = new Date();
  var buildTime = endBuild - startBuild;

  var mover = new model.Asteroid();
  var startMove = new Date();
  for (var n = 0; n < iterations; n++) {
    mover.tic();
  }
  var endMove = new Date();
  var moveTime = endMove - startMove;

  console.log(iterations + " asteroids built in " + buildTime + " milliseconds");
  console.log("One asteroid moved " + iterations + "times in " + moveTime + " milliseconds");
};


// model.benchmark(1000);
console.log(new model.Asteroid().tic);

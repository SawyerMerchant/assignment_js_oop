var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;

model.Moveable = function(speed, location) {
  if (location) {
    this.xCoord = location.x;
    this.yCoord = location.y;
  } else {
    this.xCoord = model.makeCoordinate(model.canvas.width);
    this.yCoord = model.makeCoordinate(model.canvas.height);
  }
  console.log("Created " + this.xCoord + " " + this.yCoord);
  if (speed) {
    this.xVel = speed.xVel;
    this.yVel = speed.yVel;
  } else {
    this.xVel = model.makeSpeed();
    this.yVel = model.makeSpeed();
  }
};

model.Moveable.prototype.tic = function() {
  this.xCoord += this.xVel;
  this.yCoord -= this.yVel;
  view.renderObject(this);
  //for benchmarking
  console.log("moved to " +this.xCoord + " " + this.yCoord);
};

// model.rerender = function(which) {
//   case which.moveableType
// };


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
// console.log(new model.Asteroid().tic);

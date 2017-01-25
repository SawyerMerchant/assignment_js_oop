// var Asteroids = Asteroids || {};
// var model = Asteroids.model = {};
//
// var canvas = {};
// canvas.height = 800;
// canvas.width = 1000;
//
// model.Moveable = function(speed, location) {
//   if (location) {
//     this.xCoord = location.x;
//     this.yCoord = location.y;
//   } else {
//     this.xCoord = model.makeCoordinate(canvas.width);
//     this.yCoord = model.makeCoordinate(canvas.height);
//   }
//   console.log("Created " + this.xCoord + " " + this.yCoord);
//   if (speed) {
//     this.xVel = speed.xVel;
//     this.yVel = speed.yVel;
//   } else {
//     this.xVel = model.makeSpeed();
//     this.yVel = model.makeSpeed();
//   }
// };
//
// model.Moveable.prototype.tic = function() {
//   this.xCoord += this.xVel;
//   this.yCoord -= this.yVel;
//   //for benchmarking
//   console.log("Moved to " + this.xCoord + " " + this.yCoord);
// };
//
// model.Asteroid = function(){
//   model.Moveable.call(this);
// };
// model.Asteroid.prototype = Object.create(model.Moveable.prototype);
// model.Asteroid.prototype.constructor = model.Asteroid;
//
// model.makeCoordinate = function(edge) {
//   return Math.floor(Math.random() * edge);
// };
// model.makeSpeed = function() {
//   return Math.floor(Math.random() * (canvas.height / 10));
// };
//
// model.Ship = function() {
//   this.xCoord = canvas.width / 2;
//   this.yCoord = canvas.height / 2;
// };
// model.Ship.prototype = Object.create(model.Moveable.prototype);
// model.Ship.prototype.constructor = model.Ship;
//
// model.Ship.rotate = function() {
//
// };
//
// model.Ship.thrust = function() {
//
// };
//
// model.Bullet = function(shipsCoords) {
//   this.xCoord = shipsCoords.x;
//   this.yCoord = shipsCoords.y;
// };
// model.Bullet.prototype = Object.create(model.Moveable.prototype);
// model.Bullet.prototype.constructor = model.Bullet;
//
// model.benchmark = function(iterations) {
//   var startBuild = new Date();
//   for (var i = 0; i < iterations; i++) {
//     new model.Asteroid();
//   }
//   var endBuild = new Date();
//   var buildTime = endBuild - startBuild;
//
//   var mover = new model.Asteroid();
//   var startMove = new Date();
//   for (var n = 0; n < iterations; n++) {
//     mover.tic();
//   }
//   var endMove = new Date();
//   var moveTime = endMove - startMove;
//
//   console.log(iterations + " asteroids built in " + buildTime + " milliseconds");
//   console.log("One asteroid moved " + iterations + "times in " + moveTime + " milliseconds");
// };
//
//
// // model.benchmark(1000);
// // console.log(new model.Asteroid().tic);

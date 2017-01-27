var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
model.shipStartSpeed = {};
model.shipStartSpeed.xVel = 0;
model.shipStartSpeed.yVel = 0;


model.Ship = function(speed) {
  model.Moveable.call(this, speed);
  this.xCoord = model.canvas.width / 2;
  this.yCoord = model.canvas.height / 2;
  this.img = new Image();
  this.img.src = 'images/shiprest.png';
  view.renderObject(this);
};
model.Ship.prototype = Object.create(model.Moveable.prototype);
model.Ship.prototype.constructor = model.Ship;


var TO_RADIANS = Math.PI/180;
model.Ship.rotate = function() {
  context.save();
};

model.Ship.thrust = function() {

};

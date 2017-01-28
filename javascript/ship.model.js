var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
model.shipStartSpeed = {};
model.shipStartSpeed.xVel = 0;
model.shipStartSpeed.yVel = 0;


model.Ship = function(speed) {
  var self = this;
  var TO_RADIANS = Math.PI/180;
  model.Moveable.call(this, speed);
  this.acceleration = 1.5;
  this.xCoord = model.canvas.width / 2;
  this.yCoord = model.canvas.height / 2;
  this.img = new Image();
  this.heading = 1;
  this.img.src = 'images/shiprest.png';
  this.size = model.canvas.width / 75;

  this.rotateHeading = function(degrees) {
    self.heading += degrees;
  };

  this.rotateImage = function() {
    model.context.save();
    model.context.translate(self.xCoord, self.yCoord);
    model.context.rotate(self.heading * TO_RADIANS);
    var img = self.img;
    model.context.drawImage(img, -(img.width/2), -(img.height/2));
    model.context.restore();
  };

  this.thrust = function() {
    var xThrust = Math.sin(this.heading * TO_RADIANS);
    var yThrust = -Math.cos(this.heading * TO_RADIANS);
    this.xVel += xThrust * this.acceleration;
    this.yVel += yThrust * this.acceleration;
  };

  this.fire = function() {

  };
};
model.Ship.prototype = Object.create(model.Moveable.prototype);
model.Ship.prototype.constructor = model.Ship;

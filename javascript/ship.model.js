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
  this.heading = 1;
  this.img.src = 'images/shiprest.png';
  this.size = model.canvas.width / 75;
};
model.Ship.prototype = Object.create(model.Moveable.prototype);
model.Ship.prototype.constructor = model.Ship;

model.Ship.rotateHeading = function(degrees) {
  controller.ship.heading += degrees;
};


var TO_RADIANS = Math.PI/180;
model.Ship.rotateImage = function(obj) {
  model.context.save();
  model.context.translate(controller.ship.xCoord, controller.ship.yCoord);
  model.context.rotate(controller.ship.heading * TO_RADIANS);
  var img = controller.ship.img;
  model.context.drawImage(img, -(img.width/2), -(img.height/2));
  model.context.restore();
};

model.Ship.thrust = function() {

};

var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;


model.Ship = function() {
  this.xCoord = canvas.width / 2;
  this.yCoord = canvas.height / 2;
};
model.Ship.prototype = Object.create(model.Moveable.prototype);
model.Ship.prototype.constructor = model.Ship;



model.Ship.rotate = function() {

};

model.Ship.thrust = function() {

};

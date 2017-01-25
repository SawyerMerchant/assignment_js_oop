var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;


model.Bullet = function(shipsCoords) {
  this.xCoord = shipsCoords.x;
  this.yCoord = shipsCoords.y;
};
model.Bullet.prototype = Object.create(model.Moveable.prototype);
model.Bullet.prototype.constructor = model.Bullet;

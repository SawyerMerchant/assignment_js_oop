var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
model.bulletList = [];

model.Bullet = function() {
  model.Moveable.call(this);
  var TO_RADIANS = Math.PI/180;
  var self = this;
  this.halfLife = 10;
  this.listPosition = model.bulletList.length;
  this.xCoord = controller.ship.xCoord;
  this.yCoord = controller.ship.yCoord;
  this.heading = controller.ship.heading;
  this.xVel = Math.sin(this.heading * TO_RADIANS) * 40;
  this.yVel = -Math.cos(this.heading * TO_RADIANS) * 40;
  // view.renderObject(this);
  this.img = new Image();
  this.img.src = 'images/bullet.png';

  this.rotateImage = function() {
    model.context.save();
    model.context.translate(self.xCoord, self.yCoord);
    model.context.rotate(self.heading * TO_RADIANS);
    var img = this.img;
    model.context.drawImage(img, -(img.width/2), -(img.height/2));
    model.context.restore();
  };

  this.checkHalfLife = function() {
    self.halfLife -= 1;
    if (self.halfLife < 2) {
      model.bulletList.shift();
    }
  };

};
model.Bullet.prototype = Object.create(model.Moveable.prototype);
model.Bullet.prototype.constructor = model.Bullet;

model.ticBullets = function() {
  for (var b = 0; b < model.bulletList.length; b++) {
    model.bulletList[b].tic();
  }
};

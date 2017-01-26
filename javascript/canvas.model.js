var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
// does not work - Asteroid does not inherit tic
// Object.setPrototypeOf( model.Asteroid, model.Moveable.prototype);
model.canvas = {};
model.canvas.height = $(window).height() - 100;
model.canvas.width = $(window).width() - 100;

model.canvas.init = function() {
  model.canvas.height = $(window).height() - 100;
  model.canvas.width = $(window).width() - 100;
};

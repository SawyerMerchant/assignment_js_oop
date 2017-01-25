var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
// does not work - Asteroid does not inherit tic
// Object.setPrototypeOf( model.Asteroid, model.Moveable.prototype);
model.canvas = {};
model.canvas.height = 800;
model.canvas.width = 1000;

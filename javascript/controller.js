var Asteroids = Asteroids || {};
var controller = Asteroids.controller = {};

controller.initialize = function() {
  // view.initialize();
  $('#begin').on('click', function(){
    model.canvas.init();
    view.init();
    controller.startGame();
  });
  $('#restart').on('click', function() {
    controller.replay();
  });
};


controller.startGame = function() {
  controller.ship = new model.Ship(model.shipStartSpeed);
  model.generateAsteroids(4, 'large');
  var game = setInterval(function() {
    view.resetCanvas();
    model.ticAsteroids();
    model.ticBullets();
    controller.ship.tic();

    if (model.gameOver) {
      view.declareGameOver();
      clearInterval(game);
    }
    // view.updateScore();
  }, 250);
};

controller.replay = function() {
  model.asteroidList = [];
  model.bulletList = [];
  model.gameOver = false;
  model.canvas.init();
  view.init();
  controller.startGame();
};

$(document).ready( function() {
  controller.initialize();
});

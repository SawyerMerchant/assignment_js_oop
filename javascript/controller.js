var Asteroids = Asteroids || {};
var controller = Asteroids.controller = {};


controller.initialize = function() {
  // view.initialize();
  $('#begin').on('click', function(){
    model.canvas.init();
    view.init();
    controller.startGame();
  });
  // $('#restart').on('click', function() {
  //   model.replay();
  // });
};


controller.startGame = function() {
  // TODO make array of asteroids and tic each
  var mover = new model.Asteroid();
  var ship = new model.Ship(model.shipStartSpeed);
  var game = setInterval(function() {
    // $('#board').attr('width', model.canvas.width);
    view.resetCanvas();
    mover.tic();
    ship.tic();
    // if (model.gameOver()) {
    //   // view.declareGameOver();
    //   clearInterval(game);
    //   view.declareGameOver();
    // }
    // view.updateScore();
  }, 250);
};

$(document).ready( function() {
  controller.initialize();
});


// TODO
// Preven new asteroids from generating on top of ship
// Make object sizes a product of screen size

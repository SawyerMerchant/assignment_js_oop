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
  var mover = new model.Asteroid();
  var game = setInterval(function() {
    // $('#board').attr('width', model.canvas.width);
    view.resetCanvas();
    mover.tic();
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

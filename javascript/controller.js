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
  model.generateAsteroids(5);
  var game = setInterval(function() {
    view.resetCanvas();
    model.ticAsteroids();
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

var Asteroids = Asteroids || {};
var controller = Asteroids.controller = {};


controller.initialize = function() {
  // view.initialize();
  $('#begin').on('click', function(){
    model.benchmark(1000);
  });
  // $('#restart').on('click', function() {
  //   model.replay();
  // });
};


controller.startGame = function() {

};

$(document).ready( function() {
  controller.initialize();
});

var Asteroids = Asteroids || {};
var view = Asteroids.view = {};
var canvas = {};

// get from model instead
// view.initialize = function() {
//   canvas.height = 800;
//   canvas.width = 1000;
// };

view.board = $('#board');
view.board.attr('width', model.canvas.width)
          .attr('height', model.canvas.height);

view.renderAsteroid = function(x, y, size) {
  var b_canvas = document.getElementById("board");//view.board;//$('#board');
  var b_context = b_canvas.getContext("2d");
  b_context.fillRect(x, y, 20, 25);
};

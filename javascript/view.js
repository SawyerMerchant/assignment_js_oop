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

view.init = function() {
  view.board = $('#board');
  view.board.attr('width', model.canvas.width)
            .attr('height', model.canvas.height);
};

view.renderObject = function(obj) {
  var boardCanvas = document.getElementById("board");//view.board;//$('#board');
  var boardContext = boardCanvas.getContext("2d");
  var img = new Image();
  img.src = 'images/Asteroid.png';
  // view.resetCanvas();
  boardContext.drawImage(img, obj.xCoord, obj.yCoord, 75, 75);
  // boardContext.fillRect(obj.xCoord, obj.yCoord, 20, 25); // drawing rectangle
};

view.resetCanvas = function() {
  view.board.attr('width', model.canvas.width);
};

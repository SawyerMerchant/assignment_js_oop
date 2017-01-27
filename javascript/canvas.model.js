var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;

model.canvas = {};
model.canvas.height = $(window).height() - 100;
model.canvas.width = $(window).width() - 100;

model.canvas.init = function() {
  model.canvas.height = $(window).height() - 100;
  model.canvas.width = $(window).width() - 100;
};

model.board = $('#board');
model.context = model.board[0].getContext("2d");
model.board.attr('width', model.canvas.width)
          .attr('height', model.canvas.height);

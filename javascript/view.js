var Asteroids = Asteroids || {};
Asteroids.view = Asteroids.view || {};
var view = Asteroids.view;



view.init = function() {
  model.board.attr('width', model.canvas.width)
            .attr('height', model.canvas.height);
};

view.renderObject = function(obj) {
  // TODO make size dynamic
  if (obj.rotateImage) {
    obj.rotateImage();
  } else {
    model.context.drawImage(obj.img, obj.xCoord, obj.yCoord, 75, 75);
  }
};

view.resetCanvas = function() {
  model.board.attr('width', model.canvas.width);
};

$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
      controller.ship.rotateHeading(-15);
    break;

    case 38: // up
      controller.ship.thrust(1);
    break;

    case 39: // right
      controller.ship.rotateHeading(15);
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

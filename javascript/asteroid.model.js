var Asteroids = Asteroids || {};
Asteroids.model = Asteroids.model || {};
var model = Asteroids.model;
model.asteroidList = [];


// does not work - Asteroid does not inherit tic
// Object.setPrototypeOf( model.Asteroid, model.Moveable.prototype);

model.sizeDenominator = function(size) {
  var returnSize;
  switch (size) {
    case "small":
      returnSize = 45;
      break;
    case "medium":
      returnSize = 35;
      break;
    default:
      returnSize = 25;
  }
  return returnSize;
};

model.Asteroid = function(size, location){
  var self = this;
  model.Moveable.call(this, null, location);
  // this.moveableType = "asteroid";
  this.width = model.canvas.width / model.sizeDenominator(size);
  this.img = new Image();
  this.img.src = 'images/Asteroid.png';
  this.size = size;
  this.location = {};
  this.location.x = this.xCoord;
  this.location.y = this.yCoord;

  this.checkCrash = function(obj) {
    var render = true;

    // check for collision
    // if collision with ship, end game - save for last for debugging
    if ( checkCrashWithShip(obj) ) {
      model.gameOver = true;
    }
    // if collision with bullet, split, render pieces, destroy bullet
    checkCrashWithBulletList(obj);

    return render;
  };

  var checkCrashWithShip = function(obj) {
    var hitShip = false;
    // coords are in the center of images
    var xDistance = Math.abs(obj.xCoord - controller.ship.xCoord);
    var yDistance = Math.abs(obj.yCoord - controller.ship.yCoord);
    var size = obj.width / 2;
    // console.log('xdistance = ' + xDistance + ' yDistance = ' + yDistance + ' size = ' + size);
    var shipHeight = controller.ship.img.height;
    var shipWidth = controller.ship.img.width;
    if (xDistance < size && yDistance < size ) {
      hitShip = true;
      console.error('Ship Crash');
    }
    return hitShip;
  };

  var checkCrashWithBulletList = function(obj) {
    for (var bl = 0; bl < model.bulletList.length; bl++) {
      checkCrashWithBullet(obj, model.bulletList[bl]);
    }
  };

  var checkCrashWithBullet = function(obj, bullet) {
    var shouldRender = true;
    var xDistance = Math.abs(obj.xCoord - bullet.xCoord);
    var yDistance = Math.abs(obj.yCoord - bullet.yCoord);
    var size = obj.width / 2;
    console.log('xdistance = ' + xDistance + ' yDistance = ' + yDistance + ' size = ' + size);
    if (xDistance < size + 30 && yDistance < size + 30) {
      console.error('Bullet Crash');
      shouldRender = false;
      executeCrashWithBullet(obj, bullet);
    }
    return shouldRender;
  };

  var executeCrashWithBullet = function(rock, bullet) {
    var bulletIndex = model.bulletList.indexOf(bullet);
    var rockIndex = model.asteroidList.indexOf(rock);
    model.bulletList.splice(bulletIndex, 1);
    model.asteroidList.splice(rockIndex, 1);
    if (rock.size === "medium" || rock.size === "large") {
      makeSmallerAsteroids(rock);
    }
  };

  var makeSmallerAsteroids = function(rock) {
    if (rock.size === "large") {
      model.generateAsteroids(2, "medium", rock.location);
    } else if (rock.size === "medium") {
      model.generateAsteroids(2, "small", rock.location);
    }
  };

};
model.Asteroid.prototype = Object.create(model.Moveable.prototype);
model.Asteroid.prototype.constructor = model.Asteroid;

// TODO make a class method
model.makeCoordinate = function(edge) {
  return Math.floor(Math.random() * edge);
};
model.makeSpeed = function() {
  var maxSpeed = (model.canvas.height / 10);
  var minSpeed = maxSpeed * -1;
  return minSpeed + Math.floor(Math.random() * (maxSpeed - minSpeed));
};

model.generateAsteroids = function(num, size, location) {
  // var newAsteroid;
  for (var a = 0; a < num; a++) {
    model.asteroidList.push(new model.Asteroid(size, location));
  }
};

model.ticAsteroids = function() {
  for (var rock = 0; rock < model.asteroidList.length; rock++) {
    model.asteroidList[rock].tic();
  }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;

var fondo = new Background();
var level = new Level();
var hero = new Hero();
var enemie = new Enemie();

function start() {
  interval = setInterval(update, 1000 / 60);
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw();
  level.platforms();
  hero.draw();
  hero.animation();
  enemie.draw();
}

addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37:
      hero.run = true;
      hero.moveLeft();
      break;
    case 38:
      hero.jump();
      break;
    case 39:
      hero.run = true;
      hero.moveRight();
      break;
    case 65:
      hero.attacking = true;
      enemie.dead();
      break;
    case 80:
      clearInterval(interval);
      break;
  }
});

addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 37:
      hero.run = false;
      hero.moveLeft();
      break;
    case 39:
      hero.run = false;
      hero.moveRight();
      break;
    case 65:
      hero.attacking = false;
      enemie.dead();
      break;
  }
});

start();

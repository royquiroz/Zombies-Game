var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;

var fondo = new Background();
var level = new Level();
var enemie = new Enemie();
var hero = new Hero();

function start() {
  interval = setInterval(update, 1000 / 60);
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw();
  fondo.timer();
  fondo.lifes();
  fondo.points();
  level.platforms();
  hero.draw();
  hero.animation();
  enemie.generateEnemies();
  enemie.drawEnemies();
  enemie.animation();
}

addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37:
      hero.run = true;
      hero.moveLeft();
      break;
    case 38:
      hero.jump(e.keyCode);
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
      hero.static();
      break;
    case 39:
      hero.static();
      break;
    case 65:
      hero.static();
      break;
  }
});

start();

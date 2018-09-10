var enemies = [];

class Enemie {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 80;
    this.image = new Image();
    this.image.src = "./images/enemies/left/Walk_0_left.png";

    /* Movimientos enemigos */
    this.gravity = 0;
    this.limit_gravity = 20;
    this.vel_y = 0.5;
    this.desd = false;
  }

  draw(x, y) {
    y += this.gravity;
    if (this.gravity < this.limit_gravity) this.gravity += this.vel_y;
    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  collisionPlatform(x, y) {
    if (this.y + this.height <= y) {
      return false;
    }
    if (this.x <= x + 64 && this.x >= x) {
      return true;
    }
  }

  generateEnemies() {
    if (!(frames % 200 === 0)) return;
    var posicionX = Math.floor(Math.random() * (canvas.width - 1) + 1);
    var posicionY = Math.floor(Math.random() * (canvas.height - 1) + 1);
    var zombie = new Enemie(posicionX, posicionY);
    if (enemies.length < 15) {
      enemies.push(zombie);
    }
  }

  drawEnemies() {
    enemies.forEach(zombie => {
      this.draw(zombie.x, zombie.y);
    });
  }

  dead() {
    if (hero.attack(this.x, this.y)) {
      console.log("Muerto");
    }
  }
}

var enemies = [];

class Enemie {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 80;
    this.image = new Image();
    //this.image.src = "./images/enemies/left/Walk_0_left.png";

    /* Movimientos enemigos */
    this.gravity = 0;
    this.limit_gravity = 20;
    this.vel_y = 0.5;
    this.moves_sprite = 0;
    this.sprite_x = 0;
    this.isDead = false;
    this.step_length = 0.2;
    this.left = true;
    this.right = false;
  }

  draw(zombie) {
    this.image = new Image();
    zombie.y += zombie.gravity;
    if (zombie.gravity < zombie.limit_gravity) zombie.gravity += zombie.vel_y;

    if (zombie.left) {
      zombie.image.src = `./images/enemies/left/Walk_${this.sprite_x}_left.png`;
      zombie.x -= this.step_length;
      if (hero.x > zombie.x) {
        zombie.left = false;
        zombie.right = true;
      }
    }

    if (zombie.right) {
      zombie.image.src = `./images/enemies/right/Walk_${
        this.sprite_x
      }_right.png`;
      zombie.x += this.step_length;
      if (hero.x < zombie.x) {
        zombie.left = true;
        zombie.right = false;
      }
    }

    ctx.drawImage(
      zombie.image,
      zombie.x,
      zombie.y,
      zombie.width,
      zombie.height
    );
  }

  collisionPlatform(x, y, zombie) {
    if (zombie.y + zombie.height <= y) {
      return false;
    }
    if (zombie.x <= x + 64 && zombie.x >= x - 64 / 2) {
      return true;
    }
  }

  generateEnemies() {
    if (!(frames % 200 === 0)) return;
    var posicionX = Math.floor(Math.random() * (960 - 1) + 1);
    var posicionY = -30;
    var zombie = new Enemie(posicionX, posicionY);
    if (enemies.length < 15) {
      enemies.push(zombie);
    }
  }

  drawEnemies() {
    enemies.forEach(zombie => {
      this.draw(zombie);
      if (hero.dead(zombie)) {
        fondo.gameOver();
      }
    });
  }

  dead() {
    enemies.forEach(zombie => {
      if (hero.attack(zombie.x, zombie.y)) {
        zombie.dead = true;
        enemies.splice([enemies.findIndex(e => e.dead === true)], 1);
        hero.total_points += 5;
        return true;
      }
    });
  }

  animation() {
    if (this.moves_sprite >= 900) {
      this.moves_sprite = 0;
    } else {
      this.moves_sprite += 15;
    }

    for (let i = 0; i <= this.moves_sprite; i += 100) {
      if (this.moves_sprite >= i) {
        this.sprite_x = i;
      }
    }
  }
}

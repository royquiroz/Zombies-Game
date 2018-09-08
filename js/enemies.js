class Enemie {
  constructor() {
    this.x = 185;
    this.y = 259;
    this.width = 60;
    this.height = 90;
    this.image = new Image();
    this.image.src = "./images/enemies/right/Idle_0_right.png";

    /* Movimientos enemigos */
    this.gravity = 0;
    this.limit_gravity = 20;
    this.vel_y = 0.5;
  }

  draw() {
    this.y += this.gravity;
    if (this.gravity < this.limit_gravity) this.gravity += this.vel_y;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collisionPlatform(x, y) {
    if (this.y + this.height <= y) {
      return false;
    }
    if (this.x <= x + 64 && this.x >= x) {
      return true;
    }
  }

  dead() {
    if (hero.attack(this.x, this.y)) {
      console.log("Muerto");
    }
  }
}

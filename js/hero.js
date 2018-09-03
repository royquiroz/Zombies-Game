var personaje = {
  gravity: 0,
  limit_gravity: 20,
  weight: 0.5,
  jump_length: 200,
  step_length: 40
};

class Hero {
  constructor() {
    this.x = 0;
    this.y = 25;
    this.width = 50;
    this.height = 96;
    this.image = new Image();
    this.image.src = "./images/heroe/Idle__000.png";
  }

  draw() {
    this.y += personaje.gravity;
    if (personaje.gravity < personaje.limit_gravity)
      personaje.gravity += personaje.weight;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.y -= personaje.jump_length;
  }

  moveRight() {
    if (this.x <= canvas.width - this.width) {
      this.x += personaje.step_length;
    }
  }

  moveLeft() {
    if (this.x > this.width / 2) {
      this.x -= personaje.step_length;
    }
  }

  collisionPlatform(platform) {
    if (this.y + this.height < platform.y) {
      return false;
    }
    return true;
  }
}

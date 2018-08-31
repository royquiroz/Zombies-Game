var gravity = 0;
var limit_gravity = 20;
var weight = 0.5;
var jump_length = 200;
var step_length = 40;

class Hero {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.width = 50;
    this.height = 96;
    this.image = new Image();
    this.image.src = "./images/heroe/Idle__000.png";
  }

  draw() {
    this.y += gravity;
    if (gravity < limit_gravity) gravity += weight;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.y -= jump_length;
  }

  moveRight() {
    if (this.x <= canvas.width - this.width) {
      this.x += step_length;
    }
  }

  moveLeft() {
    if (this.x > this.width / 2) {
      this.x -= step_length;
    }
  }

  collisionsPlatform() {
    if (this.y - this.width < level.height) return true;
  }
}

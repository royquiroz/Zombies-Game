class Hero {
  constructor() {
    this.x = 0;
    this.y = 25;
    this.width = 45;
    this.height = 80;
    this.image = new Image();
    this.image.src = "";

    this.jumping = false;
    this.gravity = 0;
    this.limit_gravity = 20;
    this.weight = 0.5;
    this.jump_length = 150;
    this.step_length = 10;
    this.moves_sprite = 0;
    this.sprite_x = 0;
  }

  draw() {
    this.y += this.gravity;
    if (this.gravity < this.limit_gravity) this.gravity += this.weight;
    this.image.src = `./images/heroe/Idle_${this.sprite_x}.png`;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.y -= this.jump_length;
    }
  }

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.x += this.step_length;
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.step_length;
    }
  }

  collisionPlatform(x, y) {
    if (this.y + this.height <= y) {
      return false;
    }
    if (this.x <= x + 64 && this.x >= x) {
      //console.log(`ini: ${x} fin: ${x + 64}`);

      return true;
    }
  }

  animation() {
    if (this.moves_sprite >= 900) {
      this.moves_sprite = 0;
    } else {
      this.moves_sprite += 10;
    }

    for (let i = 0; i <= this.moves_sprite; i += 100) {
      if (this.moves_sprite >= i) {
        this.sprite_x = i;
      }
    }
  }
}

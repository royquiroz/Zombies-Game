class Hero {
  constructor() {
    this.x = 0;
    this.y = 25;
    this.width = 0;
    this.height = 80;
    this.image = new Image();
    //this.image.src = "";
    this.total_lifes = 3;
    this.total_points = 0;

    /* Movimientos personaje */
    this.jumping = false;
    this.gravity = 0;
    this.limit_gravity = 20;
    this.vel_y = 0.5;
    this.jump_length = 150;
    this.step_length = 10;
    this.right = true;
    this.left = false;
    this.run = false;
    this.moves_sprite = 0;
    this.sprite_x = 0;
    this.attacking = false;
  }

  draw() {
    this.image = new Image();
    this.y += this.gravity;
    if (this.gravity < this.limit_gravity) this.gravity += this.vel_y;

    this.width = 42;

    if (this.right) {
      this.image.src = `./images/heroe/right/Idle_${this.sprite_x}_right.png`;
    } else {
      this.image.src = `./images/heroe/left/Idle_${this.sprite_x}_left.png`;
    }

    if (this.run && this.left) {
      this.width = 60;
      this.image.src = `./images/heroe/left/Run_${this.sprite_x}_left.png`;
    }

    if (this.run && this.right) {
      this.width = 60;
      this.image.src = `./images/heroe/right/Run_${this.sprite_x}_right.png`;
    }

    if (this.jumping) {
      this.width = 60;
      if (this.right) {
        this.image.src = `./images/heroe/right/Jump_${this.sprite_x}_right.png`;
      } else {
        this.image.src = `./images/heroe/left/Jump_${this.sprite_x}_left.png`;
      }
    }

    if (this.attacking && this.right) {
      this.width = 90;
      this.image.src = `./images/heroe/right/Attack_600_right.png`;
    }

    if (this.attacking && this.left) {
      this.width = 90;
      this.image.src = `./images/heroe/left/Attack_600_left.png`;
    }

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.y -= this.jump_length + this.vel_y;
    }
  }

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.right = true;
      this.left = false;
      this.x += this.step_length;
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.left = true;
      this.right = false;
      this.x -= this.step_length;
    }
  }

  collisionPlatform(x, y) {
    if (this.y + this.height <= y) {
      return false;
    }
    if (this.x >= x - 64 / 2 && this.x <= x + 64) {
      return true;
    }
  }

  static() {
    this.run = false;
    this.attacking = false;
  }

  animation() {
    if (this.moves_sprite >= 900) {
      this.moves_sprite = 0;
    } else {
      this.moves_sprite += 30;
    }

    for (let i = 0; i <= this.moves_sprite; i += 100) {
      if (this.moves_sprite >= i) {
        this.sprite_x = i;
      }
    }
  }

  attack(x, y) {
    if (
      this.attacking &&
      (this.x <= x + enemie.width + this.width &&
        this.x >= x - enemie.width - this.width) &&
      (this.y <= y + enemie.height + this.height && this.y >= y - this.height)
    ) {
      return true;
    }
    return false;
  }

  dead(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}

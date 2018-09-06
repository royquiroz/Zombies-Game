var personaje = {
  gravity: 0,
  limit_gravity: 20,
  weight: 0.5,
  jump_length: 150,
  step_length: 64,
  moves_sprite: 0,
  sprite_x: 0
};

class Hero {
  constructor() {
    this.x = 0;
    this.y = 25;
    this.width = 45;
    this.height = 80;
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
    if (this.x <= 832) {
      this.x += personaje.step_length;
    }
  }

  moveLeft() {
    if (this.x > this.width / 2) {
      this.x -= personaje.step_length;
    }
  }

  collisionPlatform(x, y) {
    if (this.y + this.height <= y) {
      return false;
    }
    if (this.x === x) {
      return true;
    }
  }

  animation() {
    if (personaje.moves_sprite >= 1000) {
      personaje.moves_sprite = 0;
    } else {
      personaje.moves_sprite++;
    }

    for (let i = 0; i <= personaje.moves_sprite; i += 100) {
      if (personaje.moves_sprite >= i) {
        personaje.sprite_x = i;
        console.log(personaje.sprite_x);
      }
    }
  }
}

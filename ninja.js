class Ninja {
  constructor() {
    this.x = 50;
    this.y = 500;
    this.width = 121;
    this.height = 152;
    this.image = new Image();
    this.image.src = "./images/heroe/Idle__000.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

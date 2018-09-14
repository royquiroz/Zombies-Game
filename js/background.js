class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./images/background/bg.png";
    this.game_over = new Image();
    this.game_over.src = "./images/background/game_over.png";
    this.image_lifes = new Image();
    this.image_lifes.src = "./images/background/brain.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  timer() {
    ctx.font = "30px Avenir";
    ctx.fillStyle = "white";
    ctx.fillText(60 - Math.round(frames / 60), canvas.width - 50, 40);
  }

  lifes() {
    for (let i = 0; i < hero.total_lifes; i++) {
      ctx.drawImage(this.image_lifes, 20 + i * 50, 20, 25, 25);
    }
  }

  gameOver() {
    clearInterval(interval);
    interval = undefined;
    ctx.drawImage(this.game_over, this.x, this.y, this.width, this.height);
  }
}

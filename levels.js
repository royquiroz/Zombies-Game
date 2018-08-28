class Level1 {
  constructor() {
    this.x = 0;
    this.y = canvas.height - 128;
    this.width = 128;
    this.height = 128;
    this.image1 = new Image();
    this.image1.src = "./images/tiles/Tile_1.png";
    this.image2 = new Image();
    this.image2.src = "./images/tiles/Tile_2.png";
    this.image3 = new Image();
    this.image3.src = "./images/tiles/Tile_3.png";

    this.image14 = new Image();
    this.image14.src = "./images/tiles/Tile_14.png";
    this.image15 = new Image();
    this.image15.src = "./images/tiles/Tile_15.png";
    this.image16 = new Image();
    this.image16.src = "./images/tiles/Tile_16.png";
  }

  draw() {
    ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 128, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 256, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 384, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 512, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 640, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 768, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 896, this.y, this.width, this.height);
    ctx.drawImage(this.image2, this.x + 1024, this.y, this.width, this.height);
    ctx.drawImage(this.image3, this.x + 1152, this.y, this.width, this.height);

    ctx.drawImage(
      this.image14,
      this.x + 128,
      this.y - 256,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image15,
      this.x + 256,
      this.y - 256,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image16,
      this.x + 384,
      this.y - 256,
      this.width,
      this.height
    );

    ctx.drawImage(
      this.image14,
      this.x + 768,
      this.y - 256,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image15,
      this.x + 896,
      this.y - 256,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image16,
      this.x + 1024,
      this.y - 256,
      this.width,
      this.height
    );
  }
}

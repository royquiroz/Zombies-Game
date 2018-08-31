var tiles = [
  "./images/tiles/Tile_1.png",
  "./images/tiles/Tile_2.png",
  "./images/tiles/Tile_3.png",
  "./images/tiles/Tile_14.png",
  "./images/tiles/Tile_15.png",
  "./images/tiles/Tile_16.png"
];

class Level {
  constructor() {
    this.x = 0;
    this.y = canvas.height - 96;
    this.width = 96;
    this.height = 96;
    this.image = new Image();
    this.image.src = tiles[1];
  }

  draw() {
    for (let i = this.x; i <= canvas.width; i += this.width) {
      ctx.drawImage(this.image, i, this.y, this.width, this.height);
    }

    ctx.drawImage(this.image, 250, 250, this.width, this.height);

    //ctx.drawImage(this.image, i, this.y, this.width, this.height);
  }
}

var map = [
  /* Plataforma Principal */
  { imageSrc: "./images/tiles/Tile_1.png", x: 0, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 64, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 128, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 192, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 256, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 320, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 384, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 448, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 512, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 576, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 640, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 704, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 768, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_2.png", x: 832, y: canvas.height - 64 },
  { imageSrc: "./images/tiles/Tile_3.png", x: 896, y: canvas.height - 64 },
  /* Plataformas Elevadas */
  { imageSrc: "./images/tiles/Tile_16.png", x: 0, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_14.png", x: 64, y: canvas.height - 320 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 128, y: canvas.height - 320 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 192, y: canvas.height - 320 },
  { imageSrc: "./images/tiles/Tile_16.png", x: 256, y: canvas.height - 320 },
  { imageSrc: "./images/tiles/Tile_14.png", x: 448, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 512, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 576, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 640, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 704, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_16.png", x: 768, y: canvas.height - 448 },
  { imageSrc: "./images/tiles/Tile_14.png", x: 768, y: canvas.height - 192 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 832, y: canvas.height - 192 },
  { imageSrc: "./images/tiles/Tile_15.png", x: 896, y: canvas.height - 192 }
];

class Level {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 64;
    this.height = 64;
    this.image = new Image();
    this.image.src = "";
  }

  platforms() {
    map.forEach(elem => {
      this.x = elem.x;
      this.y = elem.y;
      this.image = new Image();
      this.image.src = elem.imageSrc;
      if (
        hero.collisionPlatform(this.x, this.y) &&
        hero.y + hero.height < this.y + personaje.gravity
      ) {
        personaje.gravity = 0;
        hero.y = this.y - hero.height;
      }
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    });
  }
}

class Component {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }

  drawComponent(imgSource) {
    let gameContext = this.game.ctx;
    this.img.src = imgSource;

    this.img.addEventListener("load", () => {
      gameContext.drawImage(this.img, this.x, this.y, this.width, this.height);
    });
  }
}

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.bgImg = new Image();
    this.car = new Car(this, 200, 550, 100, 150);
    this.obstacles = [];
  }

  init() {
    this.start();
    this.createObstacles();
  }

  start() {
    this.drawBg();
    this.drawCar();
    setInterval(() => {
      this.clear();
      this.drawBg();
      this.drawCar();
      this.car.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.car.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].y > 800) {
          this.obstacles.splice(i, 1);
        }
      }
    }, 1000 / 60);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 25) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
      console.log("obstacle == ", this.obstacles);
    }

    setTimeout(() => {
      this.createObstacles();
    }, 3000);
  }

  drawBg() {
    this.bgImg.src = "../images/road.png";
    this.bgImg.addEventListener("load", () => {
      this.ctx.drawImage(this.bgImg, this.x, this.y, this.width, this.height);
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCar() {
    this.car.drawComponent("./images/car.png");
  }
}

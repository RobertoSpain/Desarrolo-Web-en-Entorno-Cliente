class Ball {
    constructor(x, y, radius, dx, dy, color) {
      this.x = x;           // Posición horizontal
      this.y = y;           // Posición vertical
      this.radius = radius; // Radio de la bola
      this.dx = dx;         // Velocidad horizontal
      this.dy = dy;         // Velocidad vertical
      this.color = color;   // Color de la bola
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  
    update(canvasWidth, canvasHeight, gravity, friction) {
      // Rebote horizontal
      if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
        this.dx = -this.dx * friction;
      }
  
      // Rebote vertical
      if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
        this.dy = -this.dy * friction;
      }
  
      // Actualizar posición
      this.x += this.dx;
      this.y += this.dy;
  
      // Aplicar gravedad
      this.dy += gravity;
    }
  }
  
  class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId); // Canvas
      this.ctx = this.canvas.getContext('2d');         // Contexto 2D
      this.balls = [];                                 // Array de bolas
      this.gravity = 0.5;                              // Gravedad
      this.friction = 0.98;                            // Fricción
    }
  
    randomColor() {
      return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  
    addBall() {
      const radius = 20;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 10;
      const dy = (Math.random() - 0.5) * 10;
      const color = this.randomColor();
      this.balls.push(new Ball(x, y, radius, dx, dy, color));
    }
  
    resetGame() {
      this.balls = [];
      this.addBall();
    }
  
    updateAndDraw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        ball.update(this.canvas.width, this.canvas.height, this.gravity, this.friction);
        ball.draw(this.ctx);
      }
  
      requestAnimationFrame(() => this.updateAndDraw());
    }
  
    start() {
      this.resetGame(); 
      this.updateAndDraw(); 
    }
  }
  
  const game = new Game('gameCanvas');
  game.start();
  
  document.getElementById('addBall').addEventListener('click', () => game.addBall());
  document.getElementById('resetGame').addEventListener('click', () => game.resetGame());
  
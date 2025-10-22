const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game Constants
const paddleWidth = 12, paddleHeight = 90;
const ballSize = 14;
const playerX = 24, aiX = canvas.width - 24 - paddleWidth;

// Initial State
let playerY = canvas.height/2 - paddleHeight/2;
let aiY = canvas.height/2 - paddleHeight/2;
let ballX = canvas.width/2 - ballSize/2;
let ballY = canvas.height/2 - ballSize/2;
let ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
let ballSpeedY = 5 * (Math.random()*2 - 1);
let aiSpeed = 5;

// Draw functions
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}
function drawBall(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}
function drawNet() {
  ctx.fillStyle = "#444";
  for(let i = 0; i < canvas.height; i += 28) {
    ctx.fillRect(canvas.width/2 - 2, i, 4, 18);
  }
}

// Game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
  // Ball movement
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Top/Bottom wall collision
  if(ballY <= 0 || ballY + ballSize >= canvas.height) {
    ballSpeedY *= -1;
  }

  // Player paddle collision
  if(ballX <= playerX + paddleWidth && ballY + ballSize > playerY && ballY < playerY + paddleHeight) {
    ballX = playerX + paddleWidth; // Prevent getting stuck
    ballSpeedX *= -1.07;
    // Change Y direction based on hit position
    let collidePoint = (ballY + ballSize/2) - (playerY + paddleHeight/2);
    ballSpeedY = collidePoint * 0.2;
  }

  // AI paddle collision
  if(ballX + ballSize >= aiX && ballY + ballSize > aiY && ballY < aiY + paddleHeight) {
    ballX = aiX - ballSize;
    ballSpeedX *= -1.07;
    let collidePoint = (ballY + ballSize/2) - (aiY + paddleHeight/2);
    ballSpeedY = collidePoint * 0.2;
  }

  // Left or right wall (reset ball)
  if(ballX < 0 || ballX + ballSize > canvas.width) {
    resetBall();
  }

  // AI Movement
  let aiCenter = aiY + paddleHeight / 2;
  if (aiCenter < ballY + ballSize/2 - 14) {
    aiY += aiSpeed;
  } else if (aiCenter > ballY + ballSize/2 + 14) {
    aiY -= aiSpeed;
  }
  // Clamp AI paddle
  aiY = Math.max(0, Math.min(canvas.height - paddleHeight, aiY));
}

// Render everything
function render() {
  // Background
  drawRect(0, 0, canvas.width, canvas.height, "#111");
  drawNet();
  // Paddles
  drawRect(playerX, playerY, paddleWidth, paddleHeight, "#fff");
  drawRect(aiX, aiY, paddleWidth, paddleHeight, "#fff");
  // Ball
  drawBall(ballX, ballY, ballSize, "#fff");
}

// Mouse movement for player paddle
canvas.addEventListener('mousemove', function(evt) {
  let rect = canvas.getBoundingClientRect();
  let mouseY = evt.clientY - rect.top;
  playerY = mouseY - paddleHeight / 2;
  playerY = Math.max(0, Math.min(canvas.height - paddleHeight, playerY));
});

// Reset ball to center
function resetBall() {
  ballX = canvas.width/2 - ballSize/2;
  ballY = canvas.height/2 - ballSize/2;
  ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
  ballSpeedY = 5 * (Math.random()*2 - 1);
}

// Start game
gameLoop();const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game Constants
const paddleWidth = 12, paddleHeight = 90;
const ballSize = 14;
const playerX = 24, aiX = canvas.width - 24 - paddleWidth;

// Initial State
let playerY = canvas.height/2 - paddleHeight/2;
let aiY = canvas.height/2 - paddleHeight/2;
let ballX = canvas.width/2 - ballSize/2;
let ballY = canvas.height/2 - ballSize/2;
let ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
let ballSpeedY = 5 * (Math.random()*2 - 1);
let aiSpeed = 5;

// Draw functions
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}
function drawBall(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}
function drawNet() {
  ctx.fillStyle = "#444";
  for(let i = 0; i < canvas.height; i += 28) {
    ctx.fillRect(canvas.width/2 - 2, i, 4, 18);
  }
}

// Game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
  // Ball movement
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Top/Bottom wall collision
  if(ballY <= 0 || ballY + ballSize >= canvas.height) {
    ballSpeedY *= -1;
  }

  // Player paddle collision
  if(ballX <= playerX + paddleWidth && ballY + ballSize > playerY && ballY < playerY + paddleHeight) {
    ballX = playerX + paddleWidth; // Prevent getting stuck
    ballSpeedX *= -1.07;
    // Change Y direction based on hit position
    let collidePoint = (ballY + ballSize/2) - (playerY + paddleHeight/2);
    ballSpeedY = collidePoint * 0.2;
  }

  // AI paddle collision
  if(ballX + ballSize >= aiX && ballY + ballSize > aiY && ballY < aiY + paddleHeight) {
    ballX = aiX - ballSize;
    ballSpeedX *= -1.07;
    let collidePoint = (ballY + ballSize/2) - (aiY + paddleHeight/2);
    ballSpeedY = collidePoint * 0.2;
  }

  // Left or right wall (reset ball)
  if(ballX < 0 || ballX + ballSize > canvas.width) {
    resetBall();
  }

  // AI Movement
  let aiCenter = aiY + paddleHeight / 2;
  if (aiCenter < ballY + ballSize/2 - 14) {
    aiY += aiSpeed;
  } else if (aiCenter > ballY + ballSize/2 + 14) {
    aiY -= aiSpeed;
  }
  // Clamp AI paddle
  aiY = Math.max(0, Math.min(canvas.height - paddleHeight, aiY));
}

// Render everything
function render() {
  // Background
  drawRect(0, 0, canvas.width, canvas.height, "#111");
  drawNet();
  // Paddles
  drawRect(playerX, playerY, paddleWidth, paddleHeight, "#fff");
  drawRect(aiX, aiY, paddleWidth, paddleHeight, "#fff");
  // Ball
  drawBall(ballX, ballY, ballSize, "#fff");
}

// Mouse movement for player paddle
canvas.addEventListener('mousemove', function(evt) {
  let rect = canvas.getBoundingClientRect();
  let mouseY = evt.clientY - rect.top;
  playerY = mouseY - paddleHeight / 2;
  playerY = Math.max(0, Math.min(canvas.height - paddleHeight, playerY));
});

// Reset ball to center
function resetBall() {
  ballX = canvas.width/2 - ballSize/2;
  ballY = canvas.height/2 - ballSize/2;
  ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
  ballSpeedY = 5 * (Math.random()*2 - 1);
}

// Start game
gameLoop();

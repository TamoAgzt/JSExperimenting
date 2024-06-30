// Handle Collisions
function CheckCollision(positionX, positionY, canvasWidth, canvasHeight) {
  // Check for map edge
  positionX = Math.min(Math.max(positionX, 0), canvasWidth);
  positionY = Math.min(Math.max(positionY, 0), canvasHeight);

  return { positionX, positionY };
}

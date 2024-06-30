// Handle Collisions
async function CheckCollision(positionX, positionY) {
  const data = await InitializeJSONData();
  // Check for map edge
  positionX = Math.min(Math.max(positionX, 0), data.GameConsts.Canvas.width);
  positionY = Math.min(Math.max(positionY, 0), data.GameConsts.Canvas.height);

  return positionX, positionY;
}

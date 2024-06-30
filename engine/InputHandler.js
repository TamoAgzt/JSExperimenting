let currentKey = null;

function HandleKeyDown(event, playerSpeed) {
  currentKey = event.keyCode;
}

function HandleKeyUp() {
  currentKey = null;
}

function CheckInput(positionX, positionY, playerSpeed) {
  if (currentKey === 65) positionX -= playerSpeed; // A
  if (currentKey === 68) positionX += playerSpeed; // D
  if (currentKey === 87) positionY -= playerSpeed; // W
  if (currentKey === 83) positionY += playerSpeed; // S
  if (currentKey === 32) positionY += 10; // Space

  return { positionX, positionY };
}

// let currentKey = null;
// let positionX = GameConsts.Canvas.width / 2;
// let positionY = GameConsts.Canvas.height / 2;

async function CheckInput(positionX, positionY) {
  const data = await InitializeJSONData();
  let currentKey = null;

  $(document).on('keydown', function (event) {
    currentKey = event.keyCode;
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
  });

  $(document).on('keyup', function (event) {
    currentKey = null;
    console.log('Key released:', event.key);
  });

  if (currentKey === 65) positionX -= playerSpeed;
  if (currentKey === 68) positionX += data.GameConsts.Player.playerSpeed;
  if (currentKey === 87) positionY -= playerSpeed;
  if (currentKey === 83) positionY += playerSpeed;
  if (currentKey === 32) positionY += 10;

  return positionX, positionY;
}

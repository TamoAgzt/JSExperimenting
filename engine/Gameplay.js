async function ShowCanvas() {
  const data = await InitializeJSONData();

  const playerSpeed = data.GameConsts.Player.playerSpeed;

  const $canvas = $('<canvas>')
    .attr({
      id: 'myCanvas',
      width: data.GameConsts.Canvas.width,
      height: data.GameConsts.Canvas.height
    })
    .addClass('gameCanvas')
    .appendTo('body');

  const canvas = $canvas[0];
  const context = canvas.getContext('2d');

  let positionX = canvas.width / 2;
  let positionY = canvas.height / 2;

  $(document).on('keydown', function (event) {
    HandleKeyDown(event, playerSpeed);
  });

  $(document).on('keyup', function () {
    HandleKeyUp();
  });

  function Update() {
    ({ positionX, positionY } = CheckInput(positionX, positionY, playerSpeed));
    ({ positionX, positionY } = CheckCollision(
      positionX,
      positionY,
      data.GameConsts.Canvas.width,
      data.GameConsts.Canvas.height
    ));

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = data.GameConsts.Player.playerColor;
    context.beginPath();
    context.arc(positionX, positionY, 5, 0, Math.PI * 2);
    context.fill();

    requestAnimationFrame(Update);
  }
  Update();
}

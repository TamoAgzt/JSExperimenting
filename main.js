// Setup
$(document).ready(async function () {
  const data = await InitializeJSONData();

  // Example usage of SelectFromWhere
  console.log(SelectFromWhere('Name', data.Test.Users, 'Id', '1'));

  ShowCanvas();
  // const $canvas = $('<canvas>')
  //   .attr({
  //     id: 'myCanvas',
  //     width: $(window).width() - 300,
  //     height: $(window).height() - 100
  //   })
  //   .addClass('gameCanvas')
  //   .appendTo('body');

  // const canvas = $canvas[0];
  // const context = canvas.getContext('2d');

  // let currentKey = null;
  // let positionX = canvas.width / 2;
  // let positionY = canvas.height / 2;

  // $(document).on('keydown', function (event) {
  //   currentKey = event.keyCode;
  //   console.log('Key pressed:', event.key);
  //   console.log('Key code:', event.keyCode);
  // });

  // $(document).on('keyup', function (event) {
  //   currentKey = null;
  //   console.log('Key released:', event.key);
  // });
  // CheckInput();

  // function update() {
  //   // Handle input
  //   if (currentKey === 65) positionX -= movementSpeed;
  //   if (currentKey === 68) positionX += movementSpeed;
  //   if (currentKey === 87) positionY -= movementSpeed;
  //   if (currentKey === 83) positionY += movementSpeed;
  //   if (currentKey === 32) positionY += 10;
  //   CheckCollision();
  //   context.clearRect(0, 0, canvas.width, canvas.height);

  //   context.fillStyle = 'red';
  //   context.beginPath();
  //   context.arc(positionX, positionY, 5, 0, Math.PI * 2);
  //   context.fill();

  //   requestAnimationFrame(update);
  // }

  // async function CheckCollision() {
  //   // Check for map edge
  //   positionX = Math.min(Math.max(positionX, 0), canvas.width);
  //   positionY = Math.min(Math.max(positionY, 0), canvas.height);
  // }

  // update();
});

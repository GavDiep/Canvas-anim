// Canvas
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
var tiktok = document.getElementById("tok");
var whiteAppColor = "white";
var waitAnimate = 0;
let pokeX = 325;
let pokeY = 170;
let pokeL = 200;
let pokeW = 200;
let backR = 0;
let backG = 0;
let backB = 0;
let textColor = "lightBlue";
let text2Color = "black";
let powerX = 150;
var tiktokX = 173;
var tiktokY = 200;
// Request draw function
requestAnimationFrame(draw);

function draw() {
  // Background
  ctx.fillStyle = "lightBlue";
  ctx.fillRect(0, 0, 800, 600);

  // Tablet Base

  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.roundRect(100, 100, 600, 400, 20);
  ctx.stroke();

  // Tablet Background
  ctx.fillStyle = `rgb(${backR}, ${backG}, ${backB})`;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.roundRect(100, 100, 600, 400, 20);
  ctx.fill();

  // Buttons/Camera

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(125, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.strokeStyle = "black";
  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.arc(675, 300, 15, 0, 2 * Math.PI);
  ctx.stroke();

  // Back Button

  let height = 200 * Math.cos(Math.PI / 6);

  ctx.beginPath();
  ctx.moveTo(655, 220);
  ctx.lineTo(695, 220);
  ctx.lineTo(675, 440 - height);
  ctx.fill();

  // Windows button`
  ctx.fillRect(682, 330, 5, 30);
  ctx.fillRect(672, 330, 5, 30);
  ctx.fillRect(662, 330, 5, 30);
  ctx.fill();

  // Background Img
  var pokeimg = document.getElementById("mon");
  ctx.drawImage(pokeimg, pokeX, pokeY, pokeL, pokeW);

  // Apps

  ctx.fillStyle = whiteAppColor;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.roundRect(175, 125, 40, 40, 10);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(182, 150);
  ctx.lineTo(207, 150);
  ctx.lineTo(195, 305 - height);
  ctx.fill();

  ctx.drawImage(tiktok, tiktokX, tiktokY, 45, 45);

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.roundRect(175, 275, 40, 40, 10);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(190, 290, 7, 0, 2 * Math.PI);
  ctx.arc(195, 295, 7, 0, 2 * Math.PI);
  ctx.arc(195, 287, 7, 0, 2 * Math.PI);
  ctx.arc(200, 291, 7, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = whiteAppColor;
  ctx.beginPath();
  ctx.roundRect(175, 350, 40, 40, 10);
  ctx.fill();

  ctx.font = "30px Arial bold";
  ctx.fillStyle = "green";
  ctx.fillText("M", 183, 380);

  ctx.fillStyle = whiteAppColor;
  ctx.beginPath();
  ctx.roundRect(175, 425, 40, 40, 10);
  ctx.fill();

  ctx.font = "30px comic sans bold";
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.fillText("G", 183, 455);

  // Text
  ctx.font = "13px Arial";
  ctx.fillStyle = textColor;
  ctx.fillText(
    "Controls: Press W to make some apps white, Press B to make some apps black.",
    325,
    590
  );
  ctx.fill();

  ctx.fillStyle = text2Color;
  ctx.fillText("Press H to see controls", 100, 590);

  // Animation

  // Pokemon Random position and Varying Size (prevents from going outside of border)
  if (pokeX <= 500 && pokeY <= 300) {
    pokeX += Math.random() * 3 + 1;
    pokeY += Math.random() * 3 + 1;
    pokeL += Math.floor(Math.random() * 2 + 1);
    pokeW += Math.floor(Math.random() * 2 + 1);
  } else {
    pokeX = Math.floor(Math.random() * 500 + 50);
    pokeY = Math.floor(Math.random() * 300 + 50);
  }

  tiktokX += 3;

  if (tiktokX > 400) {
    tiktokX = 173;
    tiktokY = Math.random() * 300 + 0;
  }

  // Prevents img from being too big
  if (pokeL >= 200 || pokeW >= 200) {
    pokeL = 100;
    pokeW = 100;
  }

  // Color changing thing rgb(255, 0, 0) to rgb(143, 0, 255)
  if (backR <= 255) {
    backR += 1;
  } else {
    backR = Math.floor(Math.random() * 255 + 0);
  }
  if (backG <= 255) {
    backG += 1;
  } else {
    backG = Math.floor(Math.random() * 255 + 0);
  }

  if (backB <= 255) {
    backB += 2;
  } else {
    backB = Math.floor(Math.random() * 255 + 0);
  }
  requestAnimationFrame(draw);
}
// Keyboard handler thing

document.addEventListener("keypress", keyboardHandler);
function keyboardHandler(event) {
  if (event.code == "KeyB") {
    whiteAppColor = "black";
    console.log(event.code);
  }
  console.log(event.code);
  if (event.code == "KeyW") {
    whiteAppColor = "white";
    console.log(event.code);
  }

  if (event.code == "KeyH") {
    text2Color = "lightBlue";
    textColor = "black";
    setTimeout(() => {
      console.log("5 second passed");
      textColor = "lightBlue";
      text2Color = "black";
    }, 5000);
  }
}

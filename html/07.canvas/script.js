// VARIABLES //
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

// SKY //
ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, 500, 400);

// GRASS //
ctx.fillStyle = "green";
ctx.fillRect(0, 400, 500, 100);

// HOUSE ROOF //
ctx.beginPath();
ctx.fillStyle = "red";
ctx.moveTo(180, 250);
ctx.lineTo(250, 150);
ctx.lineTo(330, 250);
ctx.stroke();
ctx.closePath();
ctx.fill();

// ROOF WINDOW //
ctx.beginPath();
ctx.arc(255, 210, 15, 0, 2 * Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

// HOUSE BODY //
ctx.strokeStyle = "black";
ctx.strokeRect(180, 250, 150, 150);
ctx.fillStyle = "orange";
ctx.fillRect(180, 250, 150, 150);

// HOUSE DOOR //
ctx.fillStyle = "brown";
ctx.fillRect(240, 350, 30, 50);
ctx.strokeStyle = "black";
ctx.strokeRect(240, 350, 30, 50);
ctx.beginPath();
ctx.arc(265, 380, 3, 0, 2 * Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

// HOUSE WINDOWS //
ctx.fillStyle = "lightgrey";
ctx.fillRect(200, 280, 30, 30);
ctx.strokeStyle = "black";
ctx.strokeRect(200, 280, 30, 30);
ctx.fillStyle = "lightgrey";
ctx.fillRect(280, 280, 30, 30);
ctx.strokeStyle = "black";
ctx.strokeRect(280, 280, 30, 30);

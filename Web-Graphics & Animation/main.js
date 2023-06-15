// Web Graphics and Animation by: Baaz

//Setup Canvas and Graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Store images in variables
let htmlLogoImg = document.getElementById("html-logo-img");

//Set the Outline (stroke) and Fill Colors
//Use any valid CSS colors; Name, rgb(), rgba(), hex (#)
//Let's draw some stuff using the graphics content (ctx)
//Rectangle

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); //Draw an outlined Rectangle

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50); //draw a filled Square

//Draw Filled Text
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello, Canvas!", 350, 50);

//Draw Unfilled Text
ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 100);

//Draw Lines
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200); //Set a starting point for your drawing
ctx.lineTo(700, 150); //Draw a line from current location to intended location (700, 150)
ctx.lineTo(600, 100);
//ctx.lineTo(500, 200);
//Draw the specified Path
ctx.stroke();

//Draw a polygon
ctx.lineWidth = 4;
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath(); //Go back to starting point
ctx.fill(); //Draw the specified Path

//Draw a circle / ARCS
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 500, 30, 0, 2 * Math.PI); //Circle with a center of (250, 500) and a radius of 30
ctx.fill();

ctx.fillStyle = "#FFFF00";
ctx.beginPath();
ctx.arc(250, 500, 20, 0, 1 * Math.PI); //Half of a circle
ctx.fill();

//Draw Images
ctx.drawImage(htmlLogoImg, 200, 200); //Draw image with top left corner of (200, 200)
ctx.drawImage(htmlLogoImg, 200, 350, 50, 50); //Draw an image wit the top corner at (200, 350), scale to 50/50

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8 Ball Canvas

let cnv2 = document.getElementById("8BallCanvas");
let ctx2 = cnv2.getContext("2d");
cnv2.width = 200;
cnv2.height = 200;

//8 Ball

//Black Ball
ctx2.lineWidth = 2;
ctx2.fillStyle = "#000000";
ctx2.beginPath();
ctx2.arc(100, 100, 100, 0, 2 * Math.PI);
ctx2.fill();

//White Ball
ctx2.lineWidth = 2;
ctx2.fillStyle = "#FFFFFF";
ctx2.beginPath();
ctx2.arc(100, 100, 55, 0, 2 * Math.PI);
ctx2.fill();

//Eight
ctx2.lineWidth = 2;
ctx2.fillStyle = "#000000";
ctx2.beginPath();

//Step 1
ctx2.moveTo(100, 100);
ctx2.lineTo(115, 95);
ctx2.lineTo(120, 80);
ctx2.lineTo(115, 65);
ctx2.lineTo(100, 60);
ctx2.lineTo(85, 65);
ctx2.lineTo(80, 80);
ctx2.lineTo(85, 95);

//Step 2
ctx2.lineTo(100, 100);
ctx2.lineTo(85, 105);
ctx2.lineTo(80, 120);
ctx2.lineTo(85, 135);
ctx2.lineTo(100, 140);
ctx2.lineTo(115, 135);
ctx2.lineTo(120, 120);
ctx2.lineTo(115, 105);
ctx2.closePath();
ctx2.stroke();

//Abdul Canvas

let cnv3 = document.getElementById("abdulCanvas");
let ctx3 = cnv3.getContext("2d");
cnv3.width = 800;
cnv3.height = 600;

//ARMS

//forearms
//Left forarm
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.moveTo(130, 225);
ctx3.lineTo(170, 225);
ctx3.lineTo(180, 115);
ctx3.lineTo(160, 115);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(130, 225);
ctx3.lineTo(170, 225);
ctx3.lineTo(180, 115);
ctx3.lineTo(160, 115);
ctx3.closePath();
ctx3.stroke();

//Right Forearm
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.moveTo(630, 225);
ctx3.lineTo(670, 225);
ctx3.lineTo(640, 115);
ctx3.lineTo(620, 115);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(630, 225);
ctx3.lineTo(670, 225);
ctx3.lineTo(640, 115);
ctx3.lineTo(620, 115);
ctx3.closePath();
ctx3.stroke();

//Fists
//left fist
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(180, 105, 25, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(180, 105, 25, 0, 2 * Math.PI);
ctx3.stroke();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(180, 105);
ctx3.lineTo(205, 115);
ctx3.closePath();
ctx3.stroke();

//Right Fist
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(620, 105, 25, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(620, 105, 25, 0, 2 * Math.PI);
ctx3.stroke();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(620, 105);
ctx3.lineTo(595, 115);
ctx3.closePath();
ctx3.stroke();

//Left Shoulder
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(275, 185, 50, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(275, 185, 50, 0, 2 * Math.PI);
ctx3.stroke();

//Right Shoulder
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(525, 185, 50, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(525, 185, 50, 0, 2 * Math.PI);
ctx3.stroke();

//Left Bicep
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(200, 205, 40, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(200, 205, 40, 0, 2 * Math.PI);
ctx3.stroke();

//Right Bicep
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(600, 205, 40, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(600, 205, 40, 0, 2 * Math.PI);
ctx3.stroke();

//Elbows
//left elbow
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(150, 225, 20, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(150, 225, 20, 0, 2 * Math.PI);
ctx3.stroke();

//right elbow
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(650, 225, 20, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(650, 225, 20, 0, 2 * Math.PI);
ctx3.stroke();

//TORSO

//Abs
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.fillRect(350, 250, 100, 150);

ctx3.strokeStyle = "black";
ctx3.strokeRect(350, 250, 100, 150);

ctx3.lineWidth = 2;
ctx3.fillStyle = "beige";
ctx3.beginPath();
ctx3.arc(400, 350, 15, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(168, 168, 136)";
ctx3.beginPath();
ctx3.arc(400, 350, 5, 0, 2 * Math.PI);
ctx3.fill();

//Chest
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.fillRect(275, 150, 250, 100);

ctx3.strokeStyle = "rgb(0, 0, 0)";
ctx3.strokeRect(275, 150, 250, 100);

ctx3.lineWidth = 2;
ctx3.fillStyle = "#000000";
ctx3.beginPath();
ctx3.moveTo(285, 160);
ctx3.lineTo(385, 160);
ctx3.lineTo(385, 240);
ctx3.lineTo(285, 240);
ctx3.closePath();
ctx3.stroke();

ctx3.lineWidth = 2;
ctx3.fillStyle = "#000000";
ctx3.beginPath();
ctx3.moveTo(515, 160);
ctx3.lineTo(415, 160);
ctx3.lineTo(415, 240);
ctx3.lineTo(515, 240);
ctx3.closePath();
ctx3.stroke();

//Tit #1
ctx3.lineWidth = 1;
ctx3.fillStyle = "beige";
ctx3.beginPath();
ctx3.arc(360, 215, 15, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 1;
ctx3.fillStyle = "rgb(168, 168, 136)";
ctx3.beginPath();
ctx3.arc(360, 215, 5, 0, 2 * Math.PI);
ctx3.fill();

//Tit #2
ctx3.lineWidth = 1;
ctx3.fillStyle = "beige";
ctx3.beginPath();
ctx3.arc(440, 215, 15, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 1;
ctx3.fillStyle = "rgb(168, 168, 136)";
ctx3.beginPath();
ctx3.arc(440, 215, 5, 0, 2 * Math.PI);
ctx3.fill();

//Lat #1
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.moveTo(275, 250);
ctx3.lineTo(350, 250);
ctx3.lineTo(350, 345);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.moveTo(275, 250);
ctx3.lineTo(350, 345);
ctx3.closePath();
ctx3.stroke();

//Lat 2
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.beginPath();
ctx3.moveTo(525, 250);
ctx3.lineTo(450, 250);
ctx3.lineTo(450, 345);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.moveTo(525, 250);
ctx3.lineTo(450, 345);
ctx3.closePath();
ctx3.stroke();

//LOWER BODY

//Legs part #1.1
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(0, 0, 0)";
ctx3.beginPath();
ctx3.moveTo(375, 425);
ctx3.lineTo(365, 500);
ctx3.lineTo(380, 500);
ctx3.lineTo(390, 425);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.lineTo(365, 500);
ctx3.lineTo(370, 550);
ctx3.lineTo(385, 550);
ctx3.lineTo(380, 500);
ctx3.closePath();
ctx3.fill();

//Legs part #1.2
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(0, 0, 0)";
ctx3.beginPath();
ctx3.moveTo(425, 425);
ctx3.lineTo(435, 500);
ctx3.lineTo(420, 500);
ctx3.lineTo(410, 425);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.lineTo(435, 500);
ctx3.lineTo(420, 500);
ctx3.lineTo(410, 550);
ctx3.lineTo(425, 550);
ctx3.closePath();
ctx3.fill();

//Legs Part #2
ctx3.lineWidth = 2;
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.moveTo(400, 450);
ctx3.lineTo(350, 400);
ctx3.lineTo(450, 400);
ctx3.closePath();
ctx3.fill();

//Left Foot
ctx3.lineWidth = 3;
ctx3.fillStyle = "gray";
ctx3.beginPath();
ctx3.moveTo(370, 550);
ctx3.lineTo(385, 550);
ctx3.lineTo(385, 580);
ctx3.lineTo(350, 580);
ctx3.lineTo(340, 575);
ctx3.lineTo(360, 565);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.fillStyle = "darkslategrey";
ctx3.beginPath();
ctx3.moveTo(370, 550);
ctx3.lineTo(385, 550);
ctx3.lineTo(385, 575);
ctx3.lineTo(350, 575);
ctx3.lineTo(340, 575);
ctx3.lineTo(360, 565);
ctx3.closePath();
ctx3.fill();

//Right Foot
ctx3.lineWidth = 3;
ctx3.fillStyle = "gray";
ctx3.beginPath();
ctx3.moveTo(425, 550);
ctx3.lineTo(410, 550);
ctx3.lineTo(410, 580);
ctx3.lineTo(445, 580);
ctx3.lineTo(455, 575);
ctx3.lineTo(435, 565);
ctx3.closePath();
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.fillStyle = "darkslategrey";
ctx3.beginPath();
ctx3.moveTo(425, 550);
ctx3.lineTo(410, 550);
ctx3.lineTo(410, 575);
ctx3.lineTo(445, 575);
ctx3.lineTo(455, 575);
ctx3.lineTo(435, 565);
ctx3.closePath();
ctx3.fill();

//Head

//Hair
ctx3.fillStyle = "rgb(0, 0, 0)";
ctx3.fillRect(360, 60, 80, 50);

//Base
ctx3.lineWidth = 2;
ctx3.fillStyle = "rgb(109, 68, 68)";
ctx3.beginPath();
ctx3.arc(400, 115, 40, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.arc(400, 115, 40, 0, 2 * Math.PI);
ctx3.stroke();

//Eyes
//Left
ctx3.lineWidth = 2;
ctx3.fillStyle = "white";
ctx3.beginPath();
ctx3.arc(383, 110, 10, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.arc(383, 110, 5, 0, 2 * Math.PI);
ctx3.fill();

//Right
ctx3.lineWidth = 2;
ctx3.fillStyle = "white";
ctx3.beginPath();
ctx3.arc(417, 110, 10, 0, 2 * Math.PI);
ctx3.fill();

ctx3.lineWidth = 2;
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.arc(417, 110, 5, 0, 2 * Math.PI);
ctx3.fill();

//Glasses
//Left
ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.strokeRect(370, 100, 25, 20);

//Right
ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.strokeRect(405, 100, 25, 20);

//Middle
ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(395, 110);
ctx3.lineTo(405, 110);
ctx3.closePath();
ctx3.stroke();

//Edges
ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(370, 110);
ctx3.lineTo(360, 120);
ctx3.closePath();
ctx3.stroke();

ctx3.lineWidth = 3;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(430, 110);
ctx3.lineTo(440, 120);
ctx3.closePath();
ctx3.stroke();

//Mouth
ctx3.lineWidth = 1;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(390, 135);
ctx3.lineTo(410, 135);
ctx3.lineTo(415, 139);
ctx3.lineTo(410, 143);
ctx3.lineTo(390, 143);
ctx3.lineTo(385, 139);
ctx3.closePath();
ctx3.stroke();

ctx3.lineWidth = 1;
ctx3.strokeStyle = "rgb(0, 0, 0)";
ctx3.beginPath();
ctx3.moveTo(385, 139);
ctx3.lineTo(415, 139);
ctx3.closePath();
ctx3.stroke();

function Rechnung1()
{
   let m = document.getElementById("Steigung")
   let b = document.getElementById("y-Achsenanschnitt")
   for (let x = -10; x < 11; x++ )
   {
     let y=m*x
    document.write(y);
   }
}
// Create a canvas:
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define a new path:
ctx.beginPath();

// Define a start point
ctx.moveTo(400,0);

// Define an end point
ctx.lineTo(0,400);

//((Difine color of the graph))
ctx.strokeStyle="blue"

// Draw it
ctx.stroke();

ctx.beginPath();

ctx.moveTo(200,0);

ctx.lineTo(200,400);

ctx.strokeStyle="black"

ctx.stroke();

ctx.beginPath();

ctx.moveTo(0,200);

ctx.lineTo(400,200);

ctx.stroke();
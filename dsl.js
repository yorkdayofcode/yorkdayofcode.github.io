const RED = "#FF0000";
const GREEN = "#00FF00";
const BLUE = "#0000FF";

function Line() {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);  

    context.lineWidth = 1;
    context.strokeStyle = '#00FF00';   
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
}

function Square(colour = RED, size = 100, x = 100, y = 0) {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the square
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y+size);
    context.lineTo(x+size, y+size);
    context.lineTo(x+size, y);
    context.lineTo(x, y);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = colour;
    context.fill();
}

function Triangle(colour = RED, size = 100, x = 100, y = 0) {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the triangle
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y+size);
    context.lineTo(x+size, y + (size * 2));
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = colour;
    context.fill();
}
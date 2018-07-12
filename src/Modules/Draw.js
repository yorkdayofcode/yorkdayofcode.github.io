
import Colour from './Colour';

var Line = function() {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);  

    context.lineWidth = 1;
    context.strokeStyle = '#00FF00';   
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
}

var Circle = function(colour = Colour.Red, size = 100, x = 100, y = 0) {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = colour;
    context.fill();
}

var Square = function(colour = Colour.Red, size = 100, x = 100, y = 0) {

    console.log(colour);

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

var Triangle = function(colour = Colour.Red, size = 100, x = 100, y = 0) {
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
 

export default { Line, Circle, Square, Triangle };
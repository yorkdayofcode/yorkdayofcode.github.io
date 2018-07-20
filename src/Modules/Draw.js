
import Colour from './Colour';
import Canvas from './Canvas';

var Line = function() {

    var context = Canvas.getContext();  

    context.lineWidth = 1;
    context.strokeStyle = Colour.withName('grey');   
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
}

var Circle = function(colour = Colour.Random(), diameter = 100, x = 100, y = 0, outline = false) {
    
    var context = Canvas.getContext();
    let radius = diameter / 2; 

    context.beginPath();
    context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);

    if(outline){
        context.lineWidth = 2;
        context.strokeStyle = Colour.withName('grey');
        context.stroke();
    }

    context.fillStyle = colour;
    context.fill();
}

var Square = function(colour = Colour.Random(), size = 100, x = 100, y = 0, outline = false) {

    var context = Canvas.getContext();

    // the square
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y+size);
    context.lineTo(x+size, y+size);
    context.lineTo(x+size, y);
    context.lineTo(x, y);
    context.closePath();

    // the outline
    if(outline){
        context.lineWidth = 2;
        context.strokeStyle = Colour.withName('grey');
        context.stroke();
    }

    // the fill color
    context.fillStyle = colour;
    context.fill();
}

var Triangle = function(colour = Colour.Random(), size = 100, x = 100, y = 0, outline=false) {
    
    var context = Canvas.getContext();


    var x1,y1,x2,y2,x3,y3;

    x1 = x;
    y1 = y;

    x2 = x;
    y2 = y + size;

    x3 = x + size;
    y3 = y + size;

    // the triangle
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();

    // the outline
    if(outline){
        context.lineWidth = 2;
        context.strokeStyle = Colour.withName('grey');
        context.stroke();
    }

    // the fill color
    context.fillStyle = colour;
    context.fill();
}
 
export default { Line, Circle, Square, Triangle };
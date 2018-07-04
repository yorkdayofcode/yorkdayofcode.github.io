var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    fontFamily: "tahoma",
    fontSize: "20pt"
  });

function getCanvas() {
    return document.querySelector("#canvas");
}

function getCanvasContext(canvasElement) {
    return canvasElement.getContext("2d");
}
 
function clearCanvas(canvasElement, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function getScript() {
    var editor = ace.edit("editor");
    return editor.getValue();
}

function convertCanvasToImage() {
    var jpegUrl = canvas.toDataURL("image/jpeg");
//  document.write(jpegUrl);
}

function run()
{
    var canvasElement = getCanvas();
    var canvasContext = getCanvasContext(canvasElement);

    clearCanvas(canvasElement, canvasContext);
    var script = getScript();

    Function(script)()
}

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

function Square() {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the square
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, 100);
    context.lineTo(200, 100);
    context.lineTo(200, 0);
    context.lineTo(100, 0);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#FFCC00";
    context.fill();
}


function Triangle() {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the triangle
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, 300);
    context.lineTo(300, 200);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#FF0000";
    context.fill();
}
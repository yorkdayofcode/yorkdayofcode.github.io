
// function run()
// {
//     var canvasElement = getCanvas();
//     var canvasContext = getCanvasContext(canvasElement);

//     clearCanvas(canvasElement, canvasContext);
//     var script = parent.getScript();

//     Function(script)()
// }

function getCanvas() {
    return document.querySelector("#canvas");
}

function getCanvasContext(canvasElement) {
    return canvasElement.getContext("2d");
}
 
function clearCanvas(canvasElement, context) {
    canvasElement.setAttribute('width', '500');
    canvasElement.setAttribute('height', '500');

    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
}

function convertCanvasToImage() {
   return canvas.toDataURL("image/jpeg").replace(/^data:image\/(png|jpeg);base64,/, '');
}   
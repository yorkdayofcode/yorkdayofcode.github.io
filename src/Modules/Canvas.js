
const CANVAS_SELECTOR = "#canvas"

var get = function() {
    return document.querySelector(CANVAS_SELECTOR);
}

var getContext = function() {

    let canvasElement = get();
    return canvasElement.getContext("2d");
}
 
var clear = function() {

    let canvasElement = get();
    canvasElement.setAttribute('width', '500');
    canvasElement.setAttribute('height', '500');

    let context = getContext();
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
}

var convertToImage = function() {
    let canvas = get();
   return canvas.toDataURL("image/jpeg").replace(/^data:image\/(png|jpeg);base64,/, '');
} 

export default { get, getContext, clear, convertToImage }
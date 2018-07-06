var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
     fontSize: "20pt"
   });

function load() {
    swal("Load Canvas", "Enter the name of your canvas.  (For example Duck.Dog.Fish)", {
          content: "input",
        });
}

function save() {
    swal("Canvas Saved", "Your canvas has the name of Duck.Dog.Fish", {
          button: "OK",
        });
}

function run()
{
    var canvasElement = getCanvas();
    var canvasContext = getCanvasContext(canvasElement);

    clearCanvas(canvasElement, canvasContext);
    var script = getScript();

    Function(script)()
}

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
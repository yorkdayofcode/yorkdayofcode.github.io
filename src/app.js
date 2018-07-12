import Draw from './Modules/Draw';
import Colour from './Modules/Colour';

var run = function()
{
    var canvasElement = getCanvas();
    var canvasContext = getCanvasContext(canvasElement);

    clearCanvas(canvasElement, canvasContext);
    var script = parent.getScript();
    
   var codeRunner = new Function("Draw", "Colour",script);
   codeRunner(Draw, Colour);
}

window.ydoc = {
    run
};

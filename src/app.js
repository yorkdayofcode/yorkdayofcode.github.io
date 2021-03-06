import Draw from './Modules/Draw';
import Colour from './Modules/Colour';
import Canvas from './Modules/Canvas';

var Run = function()
{
    Canvas.clear();
    var script = parent.getScript();
    
   var codeRunner = new Function("Draw", "Colour",script);
   codeRunner(Draw, Colour);
}

var ConvertToImage = function()
{
    return Canvas.convertToImage();
}

window.ydoc = {
    Run, 
    Canvas,
    ConvertToImage
};

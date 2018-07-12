import { Line, Circle, Square, Triangle } from './Modules/DrawingMethods';

export function run()
{
    var canvasElement = getCanvas();
    var canvasContext = getCanvasContext(canvasElement);

    clearCanvas(canvasElement, canvasContext);
    var script = parent.getScript();

    Function(script)()
}

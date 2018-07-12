
import * as d3ScaleChromatic from 'd3-scale-chromatic';

let Red = "#FF0000";
let Green = "#00FF00";
let Blue = "#0000FF";
let Black = "#000000";
let White = "#FFFFFF";

var Random = function(){

    return d3ScaleChromatic.interpolateRainbow(Math.random());
}

export default { Red, Green, Blue, Black, White, Random };

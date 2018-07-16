
import * as d3Scale from 'd3-scale';
import * as d3Color from 'd3-color';
import * as d3ScaleChromatic from 'd3-scale-chromatic';

var Random = function(){
    return d3ScaleChromatic.interpolateRainbow(Math.random());
}

var withName = function(name=""){
    if(name == ""){ return d3Color.color("black"); }
    return d3Color.color(name);
}

var paletteOfTweleve = function(name=""){
    
    var p;

    switch(name){
        case "icecream":
            p = d3ScaleChromatic.schemeSet3;
        break;
        default:
            p = d3ScaleChromatic.schemePaired;
    }

    return p;
    
}

var gradient = function(steps, colourRange=["black","white"]){
    

    var gradients = [];
    var gradientScale;

    if(typeof colourRange == "string"){

        var interpolator;
        switch(colourRange){
         case "cool":
            interpolator = d3ScaleChromatic.interpolateCool;
         break;
         case "warm":
            interpolator = d3ScaleChromatic.interpolateWarm;
         break;
         case "rainbow":
            interpolator = d3ScaleChromatic.interpolateRainbow;
         break;
        }  
        gradientScale = d3Scale.scaleSequential()
        .domain([0, steps])
        .interpolator(interpolator);

    } else {

        gradientScale = d3Scale.scaleLinear()
        .domain([0, steps])
        .range(colourRange);
    }

    for (var i = 0; i<steps; i++)
    {
        gradients[i] = gradientScale(i);
    }

    return gradients;

}

export default { withName, Random, paletteOfTweleve, gradient };

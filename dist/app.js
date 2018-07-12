/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_Draw__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_Colour__ = __webpack_require__(10);



var run = function run() {
    var canvasElement = getCanvas();
    var canvasContext = getCanvasContext(canvasElement);

    clearCanvas(canvasElement, canvasContext);
    var script = parent.getScript();

    var codeRunner = new Function("Draw", "Colour", script);
    codeRunner(__WEBPACK_IMPORTED_MODULE_0__Modules_Draw__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Modules_Colour__["a" /* default */]);
};

window.ydoc = {
    run: run
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Colour__ = __webpack_require__(10);



var Line = function Line() {
    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    context.lineWidth = 1;
    context.strokeStyle = '#00FF00';

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
};

var Circle = function Circle() {
    var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__Colour__["a" /* default */].RED;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = colour;
    context.fill();
};

var Square = function Square() {
    var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__Colour__["a" /* default */].RED;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the square
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + size);
    context.lineTo(x + size, y + size);
    context.lineTo(x + size, y);
    context.lineTo(x, y);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = colour;
    context.fill();
};

var Triangle = function Triangle() {
    var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__Colour__["a" /* default */].RED;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var canvasElement = getCanvas();
    var context = getCanvasContext(canvasElement);

    // the triangle
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + size);
    context.lineTo(x + size, y + size * 2);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = colour;
    context.fill();
};

/* harmony default export */ __webpack_exports__["a"] = ({ Line: Line, Circle: Circle, Square: Square, Triangle: Triangle });

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Colour = function Colour() {

    var RED = "#FF0000";
    var GREEN = "#00FF00";
    var BLUE = "#0000FF";
    var BLACK = "#000000";
    var WHITE = "#FFFFFF";
};

/* harmony default export */ __webpack_exports__["a"] = ({ Colour: Colour });

/***/ })
/******/ ]);
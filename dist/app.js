/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/js/colors.js");
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distance */ "./src/js/distance.js");


$(document).foundation();
var data,
    graph,
    patch = document.getElementById('patch'); // Called when the Visualization API is loaded.

function drawVisualization() {
  data = new vis.DataSet();
  _colors__WEBPACK_IMPORTED_MODULE_0__.colors.forEach(function (c) {
    data.add({
      x: chroma(c.name).rgb()[0],
      y: chroma(c.name).rgb()[1],
      z: chroma(c.name).rgb()[2],
      style: {
        "fill": c.hex,
        "stroke": "dimgray"
      },
      extra: "".concat(c.name, " \u2022 ").concat(c.hex, " \u2022 ").concat(chroma(c.name).rgb())
    });
  }); // specify options

  var options = {
    width: '720px',
    height: '720px',
    style: 'dot-color',
    showPerspective: true,
    showLegend: false,
    showGrid: true,
    showShadow: true,
    xLabel: 'Red',
    yLabel: 'Green',
    zLabel: 'Blue',
    xStep: 32,
    yStep: 32,
    zStep: 32,
    tooltip: function tooltip(point) {
      return point.data.extra;
    },
    // Tooltip default styling can be overridden
    tooltipStyle: {
      content: {
        background: "rgba(255, 255, 255, 0.88)",
        padding: "10px",
        borderRadius: "10px"
      },
      line: {
        borderLeft: "1px dotted rgba(0, 0, 0, 0.5)"
      },
      dot: {
        border: "5px solid rgba(0, 0, 0, 0.5)"
      }
    },
    keepAspectRatio: true,
    verticalRatio: 1.0
  };
  var camera = graph ? graph.getCameraPosition() : null; // create our graph

  var container = document.getElementById("graph");
  graph = new vis.Graph3d(container, data, options);
  if (camera) graph.setCameraPosition(camera); // restore camera position
}

window.addEventListener("load", function () {
  drawVisualization();
});
$('#r-slider').on('moved.zf.slider', function () {
  var r = document.getElementById('r').value,
      c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.r', r);
  patch.setAttribute('style', "background-color: ".concat(c));
  (0,_distance__WEBPACK_IMPORTED_MODULE_1__.nearestThree)(c);
});
$('#g-slider').on('moved.zf.slider', function () {
  var g = document.getElementById('g').value,
      c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.g', g);
  patch.setAttribute('style', "background-color: ".concat(c));
  (0,_distance__WEBPACK_IMPORTED_MODULE_1__.nearestThree)(c);
});
$('#b-slider').on('moved.zf.slider', function () {
  var b = document.getElementById('b').value,
      c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.b', b);
  patch.setAttribute('style', "background-color: ".concat(c));
  (0,_distance__WEBPACK_IMPORTED_MODULE_1__.nearestThree)(c);
});

/***/ }),

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors)
/* harmony export */ });
var colors = [{
  "spec": "CSS Level 1",
  "hex": "#000000",
  "name": "black"
}, {
  "spec": "CSS Level 1",
  "hex": "#c0c0c0",
  "name": "silver"
}, {
  "spec": "CSS Level 1",
  "hex": "#808080",
  "name": "gray"
}, {
  "spec": "CSS Level 1",
  "hex": "#ffffff",
  "name": "white"
}, {
  "spec": "CSS Level 1",
  "hex": "#800000",
  "name": "maroon"
}, {
  "spec": "CSS Level 1",
  "hex": "#ff0000",
  "name": "red"
}, {
  "spec": "CSS Level 1",
  "hex": "#800080",
  "name": "purple"
}, {
  "spec": "CSS Level 1",
  "hex": "#ff00ff",
  "name": "fuchsia"
}, {
  "spec": "CSS Level 1",
  "hex": "#008000",
  "name": "green"
}, {
  "spec": "CSS Level 1",
  "hex": "#00ff00",
  "name": "lime"
}, {
  "spec": "CSS Level 1",
  "hex": "#808000",
  "name": "olive"
}, {
  "spec": "CSS Level 1",
  "hex": "#ffff00",
  "name": "yellow"
}, {
  "spec": "CSS Level 1",
  "hex": "#000080",
  "name": "navy"
}, {
  "spec": "CSS Level 1",
  "hex": "#0000ff",
  "name": "blue"
}, {
  "spec": "CSS Level 1",
  "hex": "#008080",
  "name": "teal"
}, {
  "spec": "CSS Level 1",
  "hex": "#00ffff",
  "name": "aqua"
}, {
  "spec": "CSS Level 2",
  "hex": "#ffa500",
  "name": "orange"
}, {
  "spec": "CSS Level 3",
  "hex": "#f0f8ff",
  "name": "aliceblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#faebd7",
  "name": "antiquewhite"
}, {
  "spec": "CSS Level 3",
  "hex": "#7fffd4",
  "name": "aquamarine"
}, {
  "spec": "CSS Level 3",
  "hex": "#f0ffff",
  "name": "azure"
}, {
  "spec": "CSS Level 3",
  "hex": "#f5f5dc",
  "name": "beige"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffe4c4",
  "name": "bisque"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffebcd",
  "name": "blanchedalmond"
}, {
  "spec": "CSS Level 3",
  "hex": "#8a2be2",
  "name": "blueviolet"
}, {
  "spec": "CSS Level 3",
  "hex": "#a52a2a",
  "name": "brown"
}, {
  "spec": "CSS Level 3",
  "hex": "#deb887",
  "name": "burlywood"
}, {
  "spec": "CSS Level 3",
  "hex": "#5f9ea0",
  "name": "cadetblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#7fff00",
  "name": "chartreuse"
}, {
  "spec": "CSS Level 3",
  "hex": "#d2691e",
  "name": "chocolate"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff7f50",
  "name": "coral"
}, {
  "spec": "CSS Level 3",
  "hex": "#6495ed",
  "name": "cornflowerblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#fff8dc",
  "name": "cornsilk"
}, {
  "spec": "CSS Level 3",
  "hex": "#dc143c",
  "name": "crimson"
}, {
  "spec": "CSS Level 3",
  "hex": "#00ffff",
  "name": "cyan"
}, {
  "spec": "CSS Level 3",
  "hex": "#00008b",
  "name": "darkblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#008b8b",
  "name": "darkcyan"
}, {
  "spec": "CSS Level 3",
  "hex": "#b8860b",
  "name": "darkgoldenrod"
}, {
  "spec": "CSS Level 3",
  "hex": "#a9a9a9",
  "name": "darkgray"
}, {
  "spec": "CSS Level 3",
  "hex": "#006400",
  "name": "darkgreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#a9a9a9",
  "name": "darkgrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#bdb76b",
  "name": "darkkhaki"
}, {
  "spec": "CSS Level 3",
  "hex": "#8b008b",
  "name": "darkmagenta"
}, {
  "spec": "CSS Level 3",
  "hex": "#556b2f",
  "name": "darkolivegreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff8c00",
  "name": "darkorange"
}, {
  "spec": "CSS Level 3",
  "hex": "#9932cc",
  "name": "darkorchid"
}, {
  "spec": "CSS Level 3",
  "hex": "#8b0000",
  "name": "darkred"
}, {
  "spec": "CSS Level 3",
  "hex": "#e9967a",
  "name": "darksalmon"
}, {
  "spec": "CSS Level 3",
  "hex": "#8fbc8f",
  "name": "darkseagreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#483d8b",
  "name": "darkslateblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#2f4f4f",
  "name": "darkslategray"
}, {
  "spec": "CSS Level 3",
  "hex": "#2f4f4f",
  "name": "darkslategrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#00ced1",
  "name": "darkturquoise"
}, {
  "spec": "CSS Level 3",
  "hex": "#9400d3",
  "name": "darkviolet"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff1493",
  "name": "deeppink"
}, {
  "spec": "CSS Level 3",
  "hex": "#00bfff",
  "name": "deepskyblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#696969",
  "name": "dimgray"
}, {
  "spec": "CSS Level 3",
  "hex": "#696969",
  "name": "dimgrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#1e90ff",
  "name": "dodgerblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#b22222",
  "name": "firebrick"
}, {
  "spec": "CSS Level 3",
  "hex": "#fffaf0",
  "name": "floralwhite"
}, {
  "spec": "CSS Level 3",
  "hex": "#228b22",
  "name": "forestgreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#dcdcdc",
  "name": "gainsboro"
}, {
  "spec": "CSS Level 3",
  "hex": "#f8f8ff",
  "name": "ghostwhite"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffd700",
  "name": "gold"
}, {
  "spec": "CSS Level 3",
  "hex": "#daa520",
  "name": "goldenrod"
}, {
  "spec": "CSS Level 3",
  "hex": "#adff2f",
  "name": "greenyellow"
}, {
  "spec": "CSS Level 3",
  "hex": "#808080",
  "name": "grey"
}, {
  "spec": "CSS Level 3",
  "hex": "#f0fff0",
  "name": "honeydew"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff69b4",
  "name": "hotpink"
}, {
  "spec": "CSS Level 3",
  "hex": "#cd5c5c",
  "name": "indianred"
}, {
  "spec": "CSS Level 3",
  "hex": "#4b0082",
  "name": "indigo"
}, {
  "spec": "CSS Level 3",
  "hex": "#fffff0",
  "name": "ivory"
}, {
  "spec": "CSS Level 3",
  "hex": "#f0e68c",
  "name": "khaki"
}, {
  "spec": "CSS Level 3",
  "hex": "#e6e6fa",
  "name": "lavender"
}, {
  "spec": "CSS Level 3",
  "hex": "#fff0f5",
  "name": "lavenderblush"
}, {
  "spec": "CSS Level 3",
  "hex": "#7cfc00",
  "name": "lawngreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#fffacd",
  "name": "lemonchiffon"
}, {
  "spec": "CSS Level 3",
  "hex": "#add8e6",
  "name": "lightblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#f08080",
  "name": "lightcoral"
}, {
  "spec": "CSS Level 3",
  "hex": "#e0ffff",
  "name": "lightcyan"
}, {
  "spec": "CSS Level 3",
  "hex": "#fafad2",
  "name": "lightgoldenrodyellow"
}, {
  "spec": "CSS Level 3",
  "hex": "#d3d3d3",
  "name": "lightgray"
}, {
  "spec": "CSS Level 3",
  "hex": "#90ee90",
  "name": "lightgreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#d3d3d3",
  "name": "lightgrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffb6c1",
  "name": "lightpink"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffa07a",
  "name": "lightsalmon"
}, {
  "spec": "CSS Level 3",
  "hex": "#20b2aa",
  "name": "lightseagreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#87cefa",
  "name": "lightskyblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#778899",
  "name": "lightslategray"
}, {
  "spec": "CSS Level 3",
  "hex": "#778899",
  "name": "lightslategrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#b0c4de",
  "name": "lightsteelblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffffe0",
  "name": "lightyellow"
}, {
  "spec": "CSS Level 3",
  "hex": "#32cd32",
  "name": "limegreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#faf0e6",
  "name": "linen"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff00ff",
  "name": "magenta"
}, {
  "spec": "CSS Level 3",
  "hex": "#66cdaa",
  "name": "mediumaquamarine"
}, {
  "spec": "CSS Level 3",
  "hex": "#0000cd",
  "name": "mediumblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#ba55d3",
  "name": "mediumorchid"
}, {
  "spec": "CSS Level 3",
  "hex": "#9370db",
  "name": "mediumpurple"
}, {
  "spec": "CSS Level 3",
  "hex": "#3cb371",
  "name": "mediumseagreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#7b68ee",
  "name": "mediumslateblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#00fa9a",
  "name": "mediumspringgreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#48d1cc",
  "name": "mediumturquoise"
}, {
  "spec": "CSS Level 3",
  "hex": "#c71585",
  "name": "mediumvioletred"
}, {
  "spec": "CSS Level 3",
  "hex": "#191970",
  "name": "midnightblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#f5fffa",
  "name": "mintcream"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffe4e1",
  "name": "mistyrose"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffe4b5",
  "name": "moccasin"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffdead",
  "name": "navajowhite"
}, {
  "spec": "CSS Level 3",
  "hex": "#fdf5e6",
  "name": "oldlace"
}, {
  "spec": "CSS Level 3",
  "hex": "#6b8e23",
  "name": "olivedrab"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff4500",
  "name": "orangered"
}, {
  "spec": "CSS Level 3",
  "hex": "#da70d6",
  "name": "orchid"
}, {
  "spec": "CSS Level 3",
  "hex": "#eee8aa",
  "name": "palegoldenrod"
}, {
  "spec": "CSS Level 3",
  "hex": "#98fb98",
  "name": "palegreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#afeeee",
  "name": "paleturquoise"
}, {
  "spec": "CSS Level 3",
  "hex": "#db7093",
  "name": "palevioletred"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffefd5",
  "name": "papayawhip"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffdab9",
  "name": "peachpuff"
}, {
  "spec": "CSS Level 3",
  "hex": "#cd853f",
  "name": "peru"
}, {
  "spec": "CSS Level 3",
  "hex": "#ffc0cb",
  "name": "pink"
}, {
  "spec": "CSS Level 3",
  "hex": "#dda0dd",
  "name": "plum"
}, {
  "spec": "CSS Level 3",
  "hex": "#b0e0e6",
  "name": "powderblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#bc8f8f",
  "name": "rosybrown"
}, {
  "spec": "CSS Level 3",
  "hex": "#4169e1",
  "name": "royalblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#8b4513",
  "name": "saddlebrown"
}, {
  "spec": "CSS Level 3",
  "hex": "#fa8072",
  "name": "salmon"
}, {
  "spec": "CSS Level 3",
  "hex": "#f4a460",
  "name": "sandybrown"
}, {
  "spec": "CSS Level 3",
  "hex": "#2e8b57",
  "name": "seagreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#fff5ee",
  "name": "seashell"
}, {
  "spec": "CSS Level 3",
  "hex": "#a0522d",
  "name": "sienna"
}, {
  "spec": "CSS Level 3",
  "hex": "#87ceeb",
  "name": "skyblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#6a5acd",
  "name": "slateblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#708090",
  "name": "slategray"
}, {
  "spec": "CSS Level 3",
  "hex": "#708090",
  "name": "slategrey"
}, {
  "spec": "CSS Level 3",
  "hex": "#fffafa",
  "name": "snow"
}, {
  "spec": "CSS Level 3",
  "hex": "#00ff7f",
  "name": "springgreen"
}, {
  "spec": "CSS Level 3",
  "hex": "#4682b4",
  "name": "steelblue"
}, {
  "spec": "CSS Level 3",
  "hex": "#d2b48c",
  "name": "tan"
}, {
  "spec": "CSS Level 3",
  "hex": "#d8bfd8",
  "name": "thistle"
}, {
  "spec": "CSS Level 3",
  "hex": "#ff6347",
  "name": "tomato"
}, {
  "spec": "CSS Level 3",
  "hex": "#40e0d0",
  "name": "turquoise"
}, {
  "spec": "CSS Level 3",
  "hex": "#ee82ee",
  "name": "violet"
}, {
  "spec": "CSS Level 3",
  "hex": "#f5deb3",
  "name": "wheat"
}, {
  "spec": "CSS Level 3",
  "hex": "#f5f5f5",
  "name": "whitesmoke"
}, {
  "spec": "CSS Level 3",
  "hex": "#9acd32",
  "name": "yellowgreen"
}, {
  "spec": "CSS Level 4",
  "hex": "#663399",
  "name": "rebeccapurple"
}];

/***/ }),

/***/ "./src/js/distance.js":
/*!****************************!*\
  !*** ./src/js/distance.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nearestThree": () => (/* binding */ nearestThree)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/js/colors.js");

var nearestThree = function nearestThree(color) {
  var nt = document.getElementById('nearest-three'),
      patchStyle = 'height:3rem; border:dashed black 1px; text-align:center; line-height:2.8rem';
  nt.innerHTML = null;
  _colors__WEBPACK_IMPORTED_MODULE_0__.colors.forEach(function (c) {
    c['distance'] = chroma.distance(color, c.name);
  });
  _colors__WEBPACK_IMPORTED_MODULE_0__.colors.sort(function (a, b) {
    return a.distance - b.distance;
  });
  _colors__WEBPACK_IMPORTED_MODULE_0__.colors.slice(0, 3).forEach(function (c) {
    if (chroma(c.hex).luminance() > 0.5) {
      nt.innerHTML += "        <div className=\"grid-x grid-margin-x\">          <div className=\"cell small-12 patch\" style=\"background-color: ".concat(c.name, "; ").concat(patchStyle, "\">            <span style=\"color:black;\">").concat(c.name, "</span>          </div>        </div>");
    } else {
      nt.innerHTML += "        <div className=\"grid-x grid-margin-x\">          <div className=\"cell small-12 patch\" style=\"background-color: ".concat(c.name, "; ").concat(patchStyle, "\">            <span style=\"color:white;\">").concat(c.name, "</span>          </div>        </div>");
    }
  });
};

/***/ }),

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksinclairyola"] = self["webpackChunksinclairyola"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/css/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
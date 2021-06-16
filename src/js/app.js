import { colors } from './colors'
import { nearestThree } from "./distance";

$(document).foundation();

let
  data,
  graph,
  patch = document.getElementById('patch')
;

// Called when the Visualization API is loaded.
function drawVisualization() {
  data = new vis.DataSet();

  colors.forEach(function (c) {
    data.add({
      x: chroma(c.name).rgb()[0],
      y: chroma(c.name).rgb()[1],
      z: chroma(c.name).rgb()[2],
      style: {"fill": c.hex, "stroke":"dimgray"},
      extra: `${c.name} • ${c.hex} • ${chroma(c.name).rgb()}`
    })
  })

  // specify options
  const options = {
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
    tooltip: function (point) {
      return point.data.extra;
    },

    // Tooltip default styling can be overridden
    tooltipStyle: {
      content: {
        background: "rgba(255, 255, 255, 0.88)",
        padding: "10px",
        borderRadius: "10px",
      },
      line: {
        borderLeft: "1px dotted rgba(0, 0, 0, 0.5)",
      },
      dot: {
        border: "5px solid rgba(0, 0, 0, 0.5)",
      },
    },

    keepAspectRatio: true,
    verticalRatio: 1.0,
  };

  var camera = graph ? graph.getCameraPosition() : null;

  // create our graph
  var container = document.getElementById("graph");
  graph = new vis.Graph3d(container, data, options);

  if (camera) graph.setCameraPosition(camera); // restore camera position
}

window.addEventListener("load", () => {
  drawVisualization();
});

$('#r-slider').on('moved.zf.slider', () => {
  let
    r = document.getElementById('r').value,
    c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.r', r)
  ;
  patch.setAttribute('style', `background-color: ${c}`);
  console.info(nearestThree(c));
});
$('#g-slider').on('moved.zf.slider', () => {
  let
    g = document.getElementById('g').value,
    c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.g', g)
  ;
  patch.setAttribute('style', `background-color: ${c}`);
  console.info(nearestThree(c));
});
$('#b-slider').on('moved.zf.slider', () => {
  let
    b = document.getElementById('b').value,
    c = chroma(window.getComputedStyle(patch).backgroundColor).set('rgb.b', b)
  ;
  patch.setAttribute('style', `background-color: ${c}`);
  nearestThree(c);
  console.info(nearestThree(c));
});

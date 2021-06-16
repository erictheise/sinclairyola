import { colors } from './colors.js'

let
  data,
  graph
;

// Called when the Visualization API is loaded.
function drawVisualization() {
  data = new vis.DataSet();

  colors.forEach(function (c) {
    console.info(chroma(c.name).rgb());
    data.add({
      x: chroma(c.name).rgb()[0],
      y: chroma(c.name).rgb()[1],
      z: chroma(c.name).rgb()[2],
      style: {"fill": c.hex, "stroke":"dimgray"},
      extra: `${c.name} (${c.hex})`
    })
  })

  // specify options
  var options = {
    width: '1000px',
    height: '1000px',
    style: 'dot-color',
    showPerspective: true,
    showLegend: false,
    showGrid: true,
    showShadow: false,
    tooltip: function (point) {
      return point.data.extra;
    },

    // Tooltip default styling can be overridden
    tooltipStyle: {
      content: {
        background: "rgba(255, 255, 255, 0.84)",
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
  var container = document.getElementById("mygraph");
  graph = new vis.Graph3d(container, data, options);

  if (camera) graph.setCameraPosition(camera); // restore camera position

  document.getElementById("style").onchange = drawVisualization;
}

window.addEventListener("load", () => {
  drawVisualization();
});

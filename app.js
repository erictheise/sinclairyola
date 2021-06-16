let
  data,
  graph
;

function custom(x, y) {
  return -Math.sin(x / Math.PI) * Math.cos(y / Math.PI) * 10 + 10;
}

// Called when the Visualization API is loaded.
function drawVisualization() {
  // Create and populate a data table.
  data = new vis.DataSet();
  var extra_content = [
    "Arbitrary information",
    "You can access data from the point source object",
    "Tooltip example content",
  ];

  // create some nice looking data with sin/cos
  var steps = 5; // number of datapoints will be steps*steps
  var axisMax = 10;
  var axisStep = axisMax / steps;
  for (var x = 0; x <= axisMax; x += axisStep) {
    for (var y = 0; y <= axisMax; y += axisStep) {
      var z = custom(x, y);
      var value = y - x;
      data.add({
        x: x,
        y: y,
        z: z,
        style: value,
        extra: extra_content[(x * y) % extra_content.length],
      });
    }
  }

  // specify options
  var options = {
    width: '800px',
    height: '800px',
    style: 'dot',
    showPerspective: true,
    showLegend: true,
    showGrid: true,
    showShadow: false,

    // Option tooltip can be true, false, or a function returning a string with HTML contents
    tooltip: function (point) {
      // parameter point contains properties x, y, z, and data
      // data is the original object passed to the point constructor
      return "value: <b>" + point.z + "</b><br>" + point.data.extra;
    },

    // Tooltip default styling can be overridden
    tooltipStyle: {
      content: {
        background: "rgba(255, 255, 255, 0.7)",
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
    verticalRatio: 0.5,
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

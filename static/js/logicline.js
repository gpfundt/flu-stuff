// Creating map object
d3.csv('static/data/flu_level_seasons.csv', function(data) {
  console.log(data.map(row => parseInt(row.actlevel)));


  var data_range = data.length;
  var xaxis = Array.from(Array(data_range).keys())

  console.log(xaxis)

  var trace1 = {
    x: xaxis,
    y: data.map(row => parseInt(row.actlevel)),
    text: data.map(row => row.season),
    type: "scatter"
  };


  // Apply the group barmode to the layout
  var layout = {
    title: "Scatter of Flu Activity",
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", trace1, layout);
});
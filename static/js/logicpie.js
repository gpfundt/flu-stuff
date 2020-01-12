// Creating map object
d3.csv('static/data/states_urban_percent.csv', function(data) {
  
  var i;
  for (i = 0; i < data.length; i++) {

    var trace1 = {
      labels: ["Urban", "Rural"],
      values: [data[i].urban, 100-data[i].urban],
      type: 'pie'
    };
  
    // Apply the group barmode to the layout
    var layout = {
      title: "Pie of Flu Activity",
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("pieplot", [trace1], layout);
  }
  
});
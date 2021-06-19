d3.json('samples.json').then(function(theData) {
    var values = theData['samples'][0]['sample_values'];
    var labels = theData['samples'][0]['otu_ids'];
    var hovertext = theData['samples'][0]['otu_labels'];
    console.log(theData);

    var data = [{
        type: "bar",
        x: labels,
        y: values, orientation:'h'
    }];

    var layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        width: 500,
        height: 500
    };

    Plotly.newPlot('bar', data, layout);
})

// d3.json('samples.json').then(function(theData) {
//     var values = theData['samples'][0]['sample_values'];
//     var labels = theData['samples'][0]['otu_ids'];
//     var marker = theData['samples'][0]['otu_ids'];
//     var markers = theData['samples'][0]['otu_labels'];
//     console.log(theData);

//     vvar trace1 = {
//         x: labels,
//         y: values,
//         mode: 'markers',
//         marker: {
//           color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//           opacity: [1, 0.8, 0.6, 0.4],
//           size: marker
//         }
//       };
      
//       var data = [trace1];
      
//       var layout = {
//         title: 'Marker Size and Color',
//         showlegend: false,
//         height: 600,
//         width: 600
//       };
      
//       Plotly.newPlot('bubble', data, layout);
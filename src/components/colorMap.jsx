import React from 'react';
// import googlemaps from './module.js';

function GoogleMap() {

  google.charts.load( 'current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  })

  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'HaveBeen'],
      ['Germany', 100],
      ['United States', 100],
      ['Brazil', 0],
      ['Canada', 100],
      ['France', 100],
      ['RU', 100],
      ['Japan', 100]
    ]);

    var options = {
      colorAxis: {colors: ['palevioletred', 'royalblue', 'mediumseagreen']},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
  return null;
}

export default GoogleMap;


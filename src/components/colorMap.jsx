import React, {useState, useEffect} from 'react';
// import googlemaps from './module.js';
import styled from 'styled-components';
import axios from 'axios';


function GoogleMap(props) {

  const[country, setCountry] = useState(props.country);

  google.charts.load( 'current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  })


  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    console.log(country)
    var data = google.visualization.arrayToDataTable(country /* [
        ['Country', 'HaveBeen?'],
        ['Germany', 100],
        ['United States', 100],
        ['Brazil', 0],
        ['canada', 100],
        ['France', 100],
        ['ru', 100],
        ['Japan', 100]
      ] */);

    var options = {
      colorAxis: {colors: ['palevioletred', 'royalblue', 'mediumseagreen']},
      backgroundColor: '#b7e4df'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }

  // }, [props.country]);

  return null;
}

export default GoogleMap;


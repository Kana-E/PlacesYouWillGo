import React, {useState} from 'react';
// import googlemaps from './module.js';
import styled from 'styled-components';
import axios from 'axios';

function GoogleMap(props) {

  const[data, setData] = useState([]);

  google.charts.load( 'current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });

  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var countries = [];
    axios.get('/past')
      .then(result => {
        for (var i = 0; i < result.data.length; i++) {
          countries.push(result.data[i].countries);
        }
        return countries;
      })
      .then(coutries => {
        var input = [ ['Country', 'HaveBeen?'] ];
        for (var i = 0; i < countries.length; i++) {
          input.push([countries[i], 100]);
        }
        return input;
      })
      .then(input => {
        console.log(input)
        var data = google.visualization.arrayToDataTable(input /* [
          ['Country', 'HaveBeen?'],
          ['Germany', 100],
          ['United States', 100],
          ['Brazil', 0],
          ['canada', 100],
          ['France', 100],
          ['ru', 100],
          ['Japan', 100]
        ] */);
        return data;
      })
      .then(data => {
        var options = {
          colorAxis: {colors: ['palevioletred', 'royalblue', 'mediumseagreen']},
          backgroundColor: '#b7e4df'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      });


  }
  return null;
}

export default GoogleMap;


import React, {useState, useEffect} from 'react';
// import googlemaps from './module.js';
import styled from 'styled-components';
import axios from 'axios';



function GoogleMap(props) {

  const[country, setCountry] = useState([['Country', 'Have Been?']]);

  axios.get('/plans')
    .then(result => {
      var plans = result.data;
      var wishList = [];
      for (var i = 0; i < plans.length; i++) {
        wishList.push([plans[i].destination, 0]);
      }
      console.log(wishList)
      return wishList;
    })
    .then(wishList => {
      var list = country
      for (var i = 0; i < wishList.length; i++) {
        list.push(wishList[i]);
      }
      setCountry(list);
    });

  axios.get('/past')
    .then(result => {
      console.log(result.data)
      var countries = [];
      for (var i = 0; i < result.data.length; i++) {
        countries.push(result.data[i].countries);
      }
      return countries;
    })
    .then( countries => {
      var list = country;
      for (var i = 0; i < countries.length; i++) {
        list.push([countries[i], 100]);
      }
      setCountry(list);
    })
    .catch(err => console.log(err))


  useEffect( () => {
    console.log(country)
    google.charts.load( 'current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });

    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {

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

  }, []);

  return null;
}

export default GoogleMap;


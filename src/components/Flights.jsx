import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import cors from 'cors';

const Attraction = styled.div`
  background-color: lightblue;
`;

function Flights(props) {

  const [attractions, setAttractions] = useState([]);

  useEffect( () => {
    axios.get(`https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${props.prop.destination}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': '18210e0bd0msh4973d2d70dc0000p15eec0jsn1ec5760d2a3a'
      }
    })
      .then(response => {
        console.log(response);
        var data = response.data.data;
        var activity = [];
        for(var i = 0; i < data.length; i++) {
          if (data[i].result_type === 'activities' || 'things_to_do') {
            activity.push([data[i].result_object.name, data[i].result_object.description, data[i].result_object.photo.images.small.url]);
          }
        }
        return activity;
      })
      .then( activity => setAttractions(activity) )
      .catch(err => {
        console.log(err);
      });
  }, [props.destination]);


  if (attractions[0] === undefined) {
    return (
      <div> Loading... </div>
    );
  } else {
    return (
      <Attraction>
        {attractions[0]}
        {attractions[1]}
        {attractions[2]}
      </Attraction>
    );
  }

}


export default Flights;
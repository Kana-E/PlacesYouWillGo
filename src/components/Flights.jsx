import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import cors from 'cors';

const Attraction = styled.div`
  background-color: #f0e7c2;
  width: 1000px;
`;
const Name = styled.div`
  background-color: lightblue;
  width: 1000px;
`;
const Desc = styled.div`
  background-color: lightblue;
  width: 1000px;
`;

const Image = styled.div`
  background-color: lightblue;
`;

function Flights(props) {

  const [attractions, setAttractions] = useState([]);

  var activity = [];

  useEffect( () => {
    axios.get(`https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${props.prop.destination}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': '18210e0bd0msh4973d2d70dc0000p15eec0jsn1ec5760d2a3a'
      }
    })
      .then(response => {
        var data = response.data.data;
        for(var i = 0; i < data.length; i++) {
          if (data[i].result_type === 'activities' || 'things_to_do') {
            activity.push([data[i].result_object.location_id, data[i].result_object.name, data[i].result_object.description, data[i].result_object.photo.images.small.url]);
          }
        }
        return activity;
      })
      .then( activity => {
        var activity = activity;
        var array = [];
        for (var i = 0; i < 5; i++) {
          axios.get(`https://tripadvisor1.p.rapidapi.com/attractions/get-details?currency=USD&lang=en_US&location_id=${activity[i][0]}`, {
            'method': 'GET',
            'headers': {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key': '18210e0bd0msh4973d2d70dc0000p15eec0jsn1ec5760d2a3a'
            }
          })
            .then(result => {
              var details = result.data;
              array.push([activity[i][1],details.description, activity[i][3],details.web_url]);
            })
            .catch(err => console.log(err));
        }
        return array;
      })
      .then( activity => setAttractions(activity))
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
        <Name>
          {attractions[0][0]}
        </Name>
        <Desc>
          {attractions[0][1]}
        </Desc>
        <Image> <img src={attractions[0][2]} />
        </Image>
      </Attraction>
    );
  }

}


export default Flights;
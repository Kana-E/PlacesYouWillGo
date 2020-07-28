import React, {useState, useEffect} from 'react';
import MapChart from './MapChart.jsx';
import Plans from './Plans.jsx';
import GoogleMap from './colorMap.jsx';
import Itineraries from './Itineraries.jsx';
import Memories from './Memories.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Top = styled.div`
  background-color: #91bea5;
`;

function usePageStatus (clickedPage) {

  const [country, setCountry]  = useState([]);
  const [input, setInput]  = useState([]);

  useEffect( () => {
    axios.get('/plans')
      .then(result => {
        var plans = result.data;
        var wishList = [];
        for (var i = 0; i < plans.length; i++) {
          wishList.push([plans[i].destination, 0]);
        }
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
        list.unshift(['Country', 'Have Been?']);
        setCountry(list);
      })
      .catch(err => console.log(err));

  }, [country]);

  function handleSubmit (evt) {
    axios.post('/past', {country: input})
      .then(result => console.log(result))
      .catch( error => console.error(error));
  }


  if (clickedPage === 'plans') {
    return (
      <div>
        <Plans/>
        <Itineraries/>
      </div>
    );
  } else if (clickedPage === 'memories') {
    return <Memories />;
  } else if (clickedPage === 'top') {
    return (
      <div className='past'>
        <p>I have been to...</p>
        <form>
          <input type='text' placeholder='🌎Country🌎?'
            value = {input}
            onChange={e => setCountry(e.target.value)}>
          </input>
          <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
        <GoogleMap country={country}/>
      </div>
    );
  }

}

function App () {

  const [page, setPage] = useState('top');

  return (
    <Top>
      <div className='menu'>
        <div onClick={() => setPage('top')}>Travel Map</div>
        <div onClick={() => setPage('plans')}>Plans</div>
        {/* <div onClick={() => setPage('memories')}>Memories</div> */}
      </div>
      <div>
        {usePageStatus(page)}
      </div>
    </Top>
  );

}

export default App;
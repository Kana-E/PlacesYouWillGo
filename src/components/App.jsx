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


  function handleSubmit (evt) {
    axios.post('/past', {country: country})
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
      <div>
        <p>I have been to...</p>
        <form>
          <input type='text' placeholder='Country?'
            value = {country}
            onChange={e => setCountry(e.target.value)}>
          </input>
          <button type='submit' onClick={handleSubmit}>post</button>
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
        <div onClick={() => setPage('top')}>Top</div>
        <div onClick={() => setPage('plans')}>Plans</div>
        <div onClick={() => setPage('memories')}>Memories</div>
      </div>
      <div>
        {usePageStatus(page)}
      </div>
    </Top>
  );

}

export default App;
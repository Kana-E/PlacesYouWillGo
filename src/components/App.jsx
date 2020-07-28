import React, {useState, useEffect} from 'react';
import MapChart from './MapChart.jsx';
import Plans from './Plans.jsx';
import GoogleMap from './colorMap.jsx';
import Itineraries from './Itineraries.jsx';
import Memories from './Memories.jsx';
import styled from 'styled-components';

const Top = styled.div`
  background-color: #91bea5;
`;

function usePageStatus (clickedPage) {
  // const pageStatus = usePageStatus(clickedPage);


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
      <GoogleMap />
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
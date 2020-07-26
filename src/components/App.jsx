import React, {useState, useEffect} from 'react';
import MapChart from './MapChart.jsx';
import Plans from './Plans.jsx';
import Itineraries from './Itineraries.jsx';
import Memories from './Memories.jsx';

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
    return <MapChart />;
  }

}

function App () {

  const [page, setPage] = useState('top');

  return (
    <div>
      <div className='menu'>
        <div onClick={() => setPage('top')}>Top</div>
        <div onClick={() => setPage('plans')}>Plans</div>
        <div onClick={() => setPage('memories')}>Memories</div>
      </div>
      <div>
        {usePageStatus(page)}
      </div>
    </div>
  );

}

export default App;
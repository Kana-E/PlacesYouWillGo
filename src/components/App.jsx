import React, {useState, useEffect} from 'react';
import MapChart from './MapChart.jsx';
import Plans from './Plans.jsx';
import Memories from './Memories.jsx';

function usePageStatus (clickedPage) {
  // const pageStatus = usePageStatus(clickedPage);


  if (clickedPage === 'plans') {
    return <Plans/>;
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
        Client and Server Setup is working :)
      </div>
    </div>
  );

}

export default App;
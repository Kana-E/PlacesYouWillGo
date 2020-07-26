import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Title = styled.div`
  background-color: lightseagreen;
`;

const Form = styled.div`
  display: flex;
  flex-flow: column;
`;


function Plans () {

  const [destination, setDestination] = useState('');
  // console.log(destination)
  const [start, setStart] = useState('');
  // console.log(start)
  const [end, setEnd] = useState('');
  // console.log(end);

  // useEffect( () => {
    function handleSubmit (evt) {
      evt.preventDefault();
      axios.post('/plans', { destination: destination, start: start, end: end })
        .then(result => console.log(result))
        .catch( error => console.error(error));
    }
  // });

  return (
    <div>
      <div>Make Some Plans</div>
      <Form>
        <span>  ✈️Destination✈️
          <input type='text' placeholder='Where to?'
            value = {destination}
            onChange={e => setDestination(e.target.value)}>
          </input>
        </span>
        <span>  📅Dates📅
          <input type='text' placeholder='When? YY/MM/DD'
            value={start}
            onChange={e => setStart(e.target.value)}>
          </input>
            to
          <input type='text' placeholder='When? YY/MM/DD'
            value={end}
            onChange={e => setEnd(e.target.value)}>
          </input>
        </span>
        {/* <span>  Itinerary
          <input type='text' placeholder='Upload your e-ticket'>
          </input>
        </span> */}
      </Form>
      <button type='submit' onClick={handleSubmit}>Let's Go!</button>
    </div>
  );
}

export default Plans;

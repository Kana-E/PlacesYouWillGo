import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Title = styled.div`
  background-color: lightseagreen;
  font-size: xx-large;
  text-align: center;
  margin-top: 5%;
`;

const Form = styled.div`
  margin-bottom:2%;
  display: flex;
  flex-flow: row;
  background-color: antiquewhite;
`;

const Button = styled.button`
  margin-left: 1%;
`;


function Plans () {

  const [destination, setDestination] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  function handleSubmit (evt) {
    evt.preventDefault();
    axios.post('/plans', { destination: destination, start: start, end: end })
      .then(result => console.log(result))
      .catch( error => console.error(error));
  }

  return (
    <div>
        <Title>Make Some Plans</Title>
      <Form>
        <span>  ✈️Destination✈️
          <input type='text' placeholder='Where to?'
            value = {destination}
            onChange={e => setDestination(e.target.value)}>
          </input>
        </span>
        {/* <span>  📅Dates📅
          <input type='text' placeholder='When? YY/MM/DD'
            value={start}
            onChange={e => setStart(e.target.value)}>
          </input> */}
            {/* to
          <input type='text' placeholder='When? YY/MM/DD'
            value={end}
            onChange={e => setEnd(e.target.value)}>
          </input>
        </span> */}
        {/* <span>  Itinerary
          <input type='text' placeholder='Upload your e-ticket'>
          </input>
        </span> */}
      <Button type='submit' onClick={handleSubmit}>Let's Go!</Button>
      </Form>
    </div>
  );
}

export default Plans;

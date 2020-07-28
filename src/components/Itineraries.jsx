import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Flights from './Flights.jsx';

const Container = styled.div`
  border: solid 0.5px;
  border-color: lightsteelblue;
  -webkit-font-smoothing: antialiased;
  width: 1000px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 4% 24% 24%;
  border-top: solid 0.5px;
  border-color: lightsteelblue;
  -webkit-font-smoothing: antialiased;
`;

const Destination = styled.div`
  background-color: teal;
  justify-content: center;
  display: flex;
  -webkit-font-smoothing: antialiased;
`;
const Start = styled.div`
  background-color: green;
  justify-content: center;
  display: flex;
  -webkit-font-smoothing: antialiased;
`;
const Mid = styled.div`
  background-color: teal;
  justify-content: center;
  display: flex;
  -webkit-font-smoothing: antialiased;
`;

const End = styled.div`
  background-color: pink;
  justify-content: center;
  display: flex;
  -webkit-font-smoothing: antialiased;
`;
const Button = styled.button`
  background-color: blue;
  color: lightskyblue;
  -webkit-font-smoothing: antialiased;
`;


function Itineraries () {
  const [list, setList] = useState([]);

  useEffect( () => {
    axios.get('/plans')
      .then( result => {
        setList(result.data);
        // consol?e.log(list)
      })
      .catch(error => console.log(error));
  }, [list] );


  function handleDelete(e){
    console.log('clicked');
    var id = e.target.value;
    console.log(id)
    axios.patch('/plans', {id: id})
      .then(result => {
        setList(result.data)
      })
      .catch(error => console.log(error));
  }

  function getList() {
    return (
      <div>
        All your trips
        <Container>
          <div>
            {list.map(item => (
              <Item>
                <Destination key={item.destination + item.id}>
                  {item.destination}
                </Destination>
                <Start key={item.start}>
                  {item.start}
                </Start>
                <Mid>to</Mid>
                <End key={item.end}>
                  {item.end}
                </End>
                <Button value={item.id} onClick={handleDelete}> x Delete</Button>
                <Flights key={item.destination} prop={item}/>
              </Item>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {getList()}
    </div>
  );
}

export default Itineraries;

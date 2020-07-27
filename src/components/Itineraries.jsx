import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  border: solid 0.5px;
  border-color: lightsteelblue;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 50% 50%;
  border-top: solid 0.5px;
  border-color: lightsteelblue;
`;

const Destination = styled.div`
  background-color: teal;
`;
const Start = styled.div`
  background-color: green;
`;
const End = styled.div`
  background-color: pink;
`;
const Button = styled.button`
  background-color: blue;
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
  }, [] );


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
                <Destination key={item.destination}>
                  {item.destination}
                </Destination>
                <Start key={item.start}>
                  {item.start}
                </Start>
                <End key={item.end}>
                  {item.end}
                </End>
                <Button value={item.id} onClick={handleDelete}> x Delete</Button>
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

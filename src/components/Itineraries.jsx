import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: solid 0.5px;
  border-color: lightsteelblue;
`;

function Itineraries () {

  return (
    <div>
      All your trips
      <Container>
        <div>Trips</div>
          {/* <Trips/> */}
      </Container>
    </div>
  );
}

export default Itineraries;

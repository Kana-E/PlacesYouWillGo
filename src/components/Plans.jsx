import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  background-color: lightseagreen;
`;

const Form = styled.div`
  display: flex;
  flex-flow: column;
`;


function Plans () {

  return (
    <div>
      <div>Make Some Plans</div>
      <Form>
      <span>  ✈️Destination✈️
        <input type='text' placeholder='Where to?'>
        </input>
      </span>
      <span>  📅Dates📅
        <input type='text' placeholder='When?'>
        </input>
          to
          <input type='text' placeholder='When?'>
        </input>
      </span>
      </Form>
        <button type='submit' >Let's Go!</button>
    </div>
  );
}

export default Plans;

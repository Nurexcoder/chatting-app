import React from 'react';
import styled from 'styled-components';
import MessageContainer from '../Components/MessageContainer';
import PeopleContainer from '../Components/PeopleContainer';

const Container = styled.div`
    /* background-color: yellowgreen; */
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    /* flex: 9; */
`;

const ChatPart = () => {
  return <Container>
      <PeopleContainer/>
      <MessageContainer/>

  </Container>;
};

export default ChatPart;

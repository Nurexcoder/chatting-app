
import './App.css';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import Right from './Container/Right';

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: white;
`
function App() {
  return (
    <Container>
        <Sidebar/>
        <Right/>
        
    </Container>
  );
}

export default App;

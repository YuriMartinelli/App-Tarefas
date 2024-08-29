import React from 'react';
import Header from './components/Header';
import ListaTarefas from './components/Tarefas/ListaTarefas';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
`;


function App() {
  return (
    <AppContainer>
      <Header />
      <ListaTarefas />
    </AppContainer>
  );
}

export default App;

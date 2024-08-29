import React from 'react';
import './App.css';
import Header from './components/Header';
import Tarefa from './components/Tarefas';
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
      <Tarefa />
    </AppContainer>
  );
}

export default App;

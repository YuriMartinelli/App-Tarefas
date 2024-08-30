import React from 'react';
import Header from './components/Header';
import ListaTarefas from './components/Tarefas/ListaTarefas';
import styled from 'styled-components';
import CadastrarTarefa from './components/Tarefas/CadastrarTarefa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
`;


function App() {
  return (
    <AppContainer>
      <Header />
      <CadastrarTarefa />
    </AppContainer>
  );
}

export default App;

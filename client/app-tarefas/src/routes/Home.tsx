import React from 'react';
import Header from '../components/Header';
import ListaTarefas from '../components/Tarefas/ListaTarefas';
import styled from 'styled-components';
import CadastrarTarefa from '../components/Tarefas/CadastrarTarefa';
import Login from '../components/Login';
import CadastrarUsuario from '../components/CadastrarUsuario';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
`;


function Home() {
  return (
    <AppContainer>
    </AppContainer>
  );
}

export default Home;

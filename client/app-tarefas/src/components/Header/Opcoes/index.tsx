import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
`;

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

export default function OpcoesHeader() {
    return (
        <Opcoes>
            <Opcao>Tarefas cadastradas</Opcao>
            <Link to="/cadastrarTarefa">
                <Opcao>Cadastrar Tarefas</Opcao>
            </Link>
        </Opcoes>
    )

}
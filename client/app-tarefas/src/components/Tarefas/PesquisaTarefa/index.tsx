import { useState } from "react"
import styled from "styled-components";
import Input from "../../Input";
import { tarefas } from "../dadosPesquisa";

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;

`;

const Titulo = styled.h2`
    color: #000;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    color: #000;
    font-size: 16px; 
    font-weight: 500;
    margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    color: #000;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function PesquisarTarefa() {
    const [tarefaPesquisada, setTarefaPesquisada] = useState<Array<any>>([])

    return (
        <PesquisaContainer>
            <Titulo>Tarefas</Titulo>
            <Subtitulo>Encontre aqui sua tarefa: </Subtitulo>
            <Input
                placeholder="Pesquise por uma tarefa"
                onBlur={(e) => {
                    const pesquisa = e.target.value;
                    const tarefaPesquisada = tarefas.filter((tarefa) => tarefa.Titulo === pesquisa);
                    setTarefaPesquisada(tarefaPesquisada);
                }}
            />
            {tarefaPesquisada.map((tarefa, index) => {
                return (
                    <Resultado key={index}>
                        <p>{tarefa.Titulo}</p>
                        <p>{tarefa.Descricao}</p>
                    </Resultado>
                )
            })}
        </PesquisaContainer>
    )

}
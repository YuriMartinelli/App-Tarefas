import styled from "styled-components"
import { tarefas } from "../dadosPesquisa"
import PesquisarTarefa from "../PesquisaTarefa"
import { useState } from "react"

const TarefaContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 30px;
`
const Card = styled.div`
    align-items: space-between;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
`

const Cabecalho = styled.h2`
    display: flex;
    justify-content: space-between;
    textAlign: 'center';
    margin-right: 36px;
`

export default function ListaTarefas() {
    const [tarefasConcluidas, setTarefasConcluidas] = useState<Array<any>>([])
    return (
        <TarefaContainer>
            <Card>
                <Cabecalho>Título</Cabecalho>
                <Cabecalho>Descrição</Cabecalho>
                <Cabecalho>Concluída?</Cabecalho>
            </Card>
            {tarefas.map((tarefa, index) => (
                <Card key={index}>
                    <h3>{tarefa.Titulo}</h3>
                    <p>{tarefa.Descricao}</p>
                    <input type="checkbox" checked={tarefa.concluida} onChange={(e) => {
                        tarefas[index].concluida = e.target.checked
                        setTarefasConcluidas([...tarefasConcluidas, tarefa])

                    }} />
                </Card>
            ))}
        </TarefaContainer>
    )
}
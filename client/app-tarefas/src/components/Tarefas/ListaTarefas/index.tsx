import styled from "styled-components"
import { tarefas } from "../dadosPesquisa"
import PesquisarTarefa from "../PesquisaTarefa"
import { useState } from "react"
import { Card } from "../../Card"

const TarefaContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 30px;
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
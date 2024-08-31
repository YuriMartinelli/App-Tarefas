import styled from "styled-components"
import PesquisarTarefa from "../PesquisaTarefa"
import { useState } from "react"
import { Card } from "../../Card"
import { getTarefas } from "../../../services/tarefas"
import { TarefaInterface } from "../../../interfaces/tarefaInterface"

export const TarefaContainer = styled.section`
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
    const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

    useState(() => {
        fetchTarefas();
    })

    async function fetchTarefas() {
        const tarefasApi: TarefaInterface[] = await getTarefas()
        setTarefas(tarefasApi)
    }

    return (
        <TarefaContainer>
            <Card >
                <Cabecalho>Título</Cabecalho>
                <Cabecalho>Descrição</Cabecalho>
                <Cabecalho>Concluída?</Cabecalho>
            </Card>
            {tarefas.map((tarefa, index) => (
                <Card key={index} justifyContent="space-around">
                    <h3>{tarefa.titulo}</h3>
                    <p>{tarefa.descricao}</p>
                    <input type="checkbox" checked={tarefa.concluida} onChange={(e) => {
                        tarefas[index].concluida = e.target.checked
                        setTarefasConcluidas([...tarefasConcluidas, tarefa])

                    }} />
                </Card>
            ))}
        </TarefaContainer>
    )
}
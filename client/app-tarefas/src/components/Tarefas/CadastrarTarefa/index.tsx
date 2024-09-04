import styled from "styled-components"
import { Botao } from "../../Botao"
import Input from "../../Input"
import { useState } from "react"
import { postTarefa } from "../../../services/tarefas"
import { Button, Form } from "react-bootstrap"

const CadastrarTarefaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
const CadastrarTarefaInput = styled.input`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    &:focus {
        outline: none;
        border: 1px solid #000;
        box-shadow: 0px 0px 5px #000;
    }
    
`

const SalvarTarefaBotao = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`


export default function CadastrarTarefa() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetchCadastrarTarefa();

        console.log(response);
    }

    const tarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false
    }

    async function fetchCadastrarTarefa() {
        return await postTarefa(tarefa);
    }

    return (
        <div>
            <CadastrarTarefaContainer>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Form.Label htmlFor="titulo">Título:</Form.Label>
                        <Form.Control
                            type="text"
                            id="titulo"
                            placeholder="Digite o título da tarefa"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label htmlFor="descricao">Descrição:</Form.Label>
                        <Form.Control
                            id="descricao"
                            placeholder="Digite a descrição da tarefa"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <SalvarTarefaBotao >
                        <Button variant="success" color="white" type="submit">Cadastrar</Button>
                    </SalvarTarefaBotao>
                </Form>
            </CadastrarTarefaContainer>
        </div>
    )
}
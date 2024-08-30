import styled from "styled-components"
import { Botao } from "../../Botao"
import Input from "../../Input"

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
    return (
        <div>
            <CadastrarTarefaContainer>
                <form className="form-floating">
                    <div>
                        <label htmlFor="titulo">Título:</label>
                        <CadastrarTarefaInput className="form-control" type="text" id="titulo" placeholder="Digite o título da tarefa" />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição:</label>
                        <CadastrarTarefaInput className="form-control" id="descricao" placeholder="Digite a descrição da tarefa" />
                    </div>
                </form>
            </CadastrarTarefaContainer>
            <SalvarTarefaBotao >
                <Botao className="btn btn-success" color="white">Cadastrar</Botao>
            </SalvarTarefaBotao>
        </div>

    )
}
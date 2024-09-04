import axios from "axios";
import { TarefaInterface } from "../interfaces/tarefaInterface";
import api from "./api";

const tarefasApi = axios.create({
    baseURL: `${api.defaults.baseURL}/tarefas`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

async function getTarefas(): Promise<TarefaInterface[]> {
    console.log(tarefasApi.defaults.baseURL);

    const response = await tarefasApi.get("/consultarTodos");
    return response.data;
};

async function postTarefa(tarefa: Partial<TarefaInterface>): Promise<TarefaInterface> {
    const response = await tarefasApi.post("/cadastrar", tarefa);
    return response.data;
};

export {
    getTarefas,
    postTarefa,
}
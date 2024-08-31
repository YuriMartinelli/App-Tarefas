import axios from "axios";
import { TarefaInterface } from "../interfaces/tarefaInterface";

const tarefasApi = axios.create({
    baseURL: "http://localhost:9000/tarefas",
    headers: { Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0ZTVAdGVzdGUuY29tIiwibm9tZSI6IkpvYW8gZGFzIGNhbGNhIGJyYW5jYSIsImNwZiI6IjExMTExMTExMTExIiwic2VuaGEiOiIkMmIkMTAkYmtid0ZnTnpTaFhFa095ZjJPTmVPZXFtaWpMSjA4Lnd1OTdOQmlYVVhMSTF2QjY4WDJDd1MiLCJpYXQiOjE3MjUxMjQ3MzB9.q-WWues0oAFRMsfJMSaxLbQUIF3famWdaEJ7ELRSSUE" }
});

async function getTarefas(): Promise<TarefaInterface[]> {
    const response = await tarefasApi.get("/consultarTodos");
    return response.data;
};

export {
    getTarefas,
}
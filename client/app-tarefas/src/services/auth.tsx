import axios from "axios";
import { useState } from "react";
import Login from "../routes/Login";
import api from "./api";

const authApi = axios.create({
    baseURL: `${api.defaults.baseURL}/auth`
});

async function postLogin(email: string, senha: string): Promise<any> {
    const response = await authApi.post("/login", {
        email: email,
        senha: senha
    });

    return response.data.resposta;
}

export {
    postLogin
}


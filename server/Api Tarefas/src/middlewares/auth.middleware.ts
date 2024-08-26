import { NextFunction, Request, Response } from "express";
import Jwt, { verify } from "jsonwebtoken"
import { UsuarioInterface } from "../interfaces/usuario.interface";
import { UsuarioService } from "../services/usuarioService";

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const usuarioService = new UsuarioService();

        const { authorization } = req.headers;

        const token = authorization && authorization.split(' ')[1] || '';

        const secret: any = process.env.SECRET;

        const payload: any = verify(token, secret);

        if (!payload) {
            throw new Error("Token inválido!");
        }

        const usuario = await usuarioService.consultarById(payload.id);

        if (!usuario) {
            throw new Error("Usuário não encontrado!");
        }

        const {senha, ...usuarioLogado } = usuario;
       
        next();

    } catch (error) {
        throw new Error("Usuário não autenticado!");
    }
}

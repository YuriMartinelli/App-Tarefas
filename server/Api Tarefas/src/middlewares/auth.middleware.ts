
import Jwt, { verify } from "jsonwebtoken"
import { UsuarioInterface } from "../interfaces/usuario.interface";
import { UsuarioService } from "../services/usuarioService";
import { NextFunction, Request, Response } from "express";
import { ForbiddenError, UnauthorizedError } from "../helpers/apiErrors";

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const usuarioService = new UsuarioService();

        const { authorization } = req.headers;

        const token = authorization && authorization.split(' ')[1] || '';

        const secret: any = process.env.SECRET;

        const payload: any = verify(token, secret);

        if (!payload) {
            throw new UnauthorizedError();
        }

        const usuario = await usuarioService.consultarByParam({ id: payload.id });

        if (!usuario) {
            throw new UnauthorizedError();
        }

        const { senha, ...usuarioLogado } = usuario;

        next();

    } catch (error) {
        throw new ForbiddenError();
    }
}

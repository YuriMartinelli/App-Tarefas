import Jwt from "jsonwebtoken"
import "dotenv/config";
import { UsuarioService } from "../services/usuarioService";
import { UsuarioInterface } from "../interfaces/usuario.interface";

const secret: any = process.env.SECRET;
const refreshSecret: any = process.env.JWT_REFRESH_SECRET;

export const token = (usuario: UsuarioInterface) => {
    Jwt.sign(usuario, secret);
}

export const refreshToken = (usuario:Partial<UsuarioInterface>) => {
    Jwt.sign(usuario, refreshSecret, { expiresIn: process.env.EXPIRES_IN_JWT_REFRESH_SECRET });
}

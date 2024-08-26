import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";
import { validarUsuario } from "../helpers/validadoresHelper";
import { compare } from "bcrypt";
import { PrismaClient } from '@prisma/client';
import { AuthService } from "../services/authService";
import { Jwt, sign, verify } from "jsonwebtoken";
import { refreshToken, token } from "../utils/createTokenHelper";

export class AuthController {
    private prisma: PrismaClient;
    private authService: AuthService;

    constructor(readonly usuarioService: UsuarioService) {
        this.prisma = new PrismaClient();
        this.authService = new AuthService();
    }

    async autenticado(req: Request, res: Response) {
        return res.status(200).json({ message: "Autenticado com sucesso!" })
    }

    async eu(req: Request, res: Response) {
        return res.status(200).json({ usuario: req.body.usuario });
    }

    async login(req: Request, res: Response) {
        const { error, value } = validarUsuario(req.body);

        if (error) {
            return res.status(400).json({ message: error?.message })
        }
        console.log(value.email);
        
        const usuario = await this.usuarioService.consultarByParam({ email: value.email })

        if (!usuario) {
            throw new Error("Email ou senha inválido!");
        }

        const verificarSenha = await compare(value.senha, usuario.senha);

        if (!verificarSenha) {
            throw new Error("Email ou senha inválido!");
        }

        const usuarioRefresh = {
            id: usuario.id,
            nome: usuario.nome
        }

        const novoToken = token(usuario);
        console.log(novoToken);
        
        const expiraEm = new Date();

        expiraEm.setDate(expiraEm.getDate() + 7);

        res.cookie('refreshToken', novoToken, { httpOnly: true, sameSite: 'none', maxAge: 7 * 24 * 60 * 60 * 1000, secure: true });

        const data = {
            usuarioId: usuario!.id,
            tipo: "authentication",
            token: novoToken,
        }

        const resposta = await this.authService.cadastrar(data);

        return res.status(200).json({ resposta })
    }

    async logout(req: Request, res: Response) {

        const refreshedToken = req.cookies["refreshToken"]

        const payload: any = verify(refreshedToken, process.env.JWT_REFRESH_SECRET as string);

        if (!payload) {
            throw new Error("Não autorizado");
        }

        await this.authService.deletar({ where: { token: refreshedToken } })

        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', maxAge: 0, secure: true });

        return res.sendStatus(204);
    }

    async refresh(req: Request, res: Response) {
        try {
            const refreshedToken = req.cookies['refreshToken'];

            const payload: any = verify(refreshedToken, process.env.JWT_REFRESH_SECRET as string)

            if (!payload) {
                throw new Error("Payload errado!");
            }
            const param = {
                usuarioId: payload.id,
                tipo: "authentication",
                expiredAt: {
                    gte: new Date()
                }
            }
            const dbToken = this.authService.consultarByParam(param);

            if (!dbToken) {
                throw new Error("Token errado!");
            }

            const token = sign({ id: payload.id, name: payload.name }, process.env.SECRET as string, { expiresIn: process.env.EXPIRES_IN_JWT_SECRET });

            return res.status(200).send({ token })

        } catch (error) {
            throw new Error("deu errado")
        }
    }
}
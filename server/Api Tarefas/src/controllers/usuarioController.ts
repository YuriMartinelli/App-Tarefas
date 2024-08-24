import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService"

export class UsuarioController {
    constructor(readonly usuarioService: UsuarioService) {
        
    }

    async cadastrar(req: Request, res: Response): Promise<Response> {
        try {
            const infos = req.body;
            const resposta = await this.usuarioService.cadastrar(infos)
            return res.status(201).json(resposta);
        } catch (error) {
            return res.status(500).send("Erro ao cadastrar usuário. Erro: " + error);
        }
    }

    async consultarTodos(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await this.usuarioService.consultarTodos()
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).send("Erro ao consultar usúarios. Erro: " + error);
        }
    }

    async consultarById(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    async deletar(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}

import { Request, Response } from "express";
import UsuarioService from "../services/usuarioService"

class UsuarioController {
    private usuarioService: UsuarioService = new UsuarioService();

    async cadastrar(req: Request, res: Response): Promise<Response> {  
        try {
            const infos = req.body;
            const novoUsuario = await this.usuarioService.cadastrar(infos)
            return res.status(201).send(novoUsuario);
        } catch (error) {
            return res.status(500).send("Erro ao cadastrar usuário. Erro: " + error);
        }
    }

    async consultarTodos(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
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

export default UsuarioController;
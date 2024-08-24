import { Request, Response } from "express";
import { TarefaService } from "../services/tarefaService";

export class TarefaController {
    constructor(readonly tarefaService: TarefaService) {

    }
    async cadastrar(req: Request, res: Response): Promise<Response> {
        try {
            const infos = req.body;
            const resposta = await this.tarefaService.cadastrar(infos)
            return res.status(201).json(resposta);
        } catch (error) {
            return res.status(500).send("Erro ao cadastrar usuário. Erro: " + error);
        }
    }

    async consultarTodos(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await this.tarefaService.consultarTodos()
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).send("Erro ao consultar usúarios. Erro: " + error);
        }
    }

    async consultarById(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id

            const usuario = await this.tarefaService.consultarById(Number(id))
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).send("Erro ao consultar usúario. Erro: " + error);
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const updates = req.body

            const resposta = await this.tarefaService.atualizar(Number(id), updates)
            return res.status(200).json(resposta);
        } catch (error) {
            return res.status(500).send("Erro ao atualizar usúarios. Erro: " + error);
        }
    }

    async deletar(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id

            const resposta = await this.tarefaService.deletar(Number(id))
            return res.status(200).json(resposta);
        } catch (error) {
            return res.status(500).send("Erro ao deletar usúarios. Erro: " + error);
        }
    }
}
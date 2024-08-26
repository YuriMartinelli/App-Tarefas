import { Router } from "express";
import { tarefaController } from "../controllers";
import { verificarToken } from "../middlewares/auth.middleware";

const tarefaRoute = Router();
tarefaRoute.use(verificarToken)

tarefaRoute
    .post("/cadastrar", (req, res) => tarefaController.cadastrar(req, res))
    .get("/consultarTodos", (req, res) => tarefaController.consultarTodos(req, res))
    .get("/consultarById/:id", (req, res) => tarefaController.consultarById(req, res))
    .put("/atualizar/:id", (req, res) => tarefaController.atualizar(req, res))
    .delete("/deletar/:id", (req, res) => tarefaController.deletar(req, res))

export default tarefaRoute;
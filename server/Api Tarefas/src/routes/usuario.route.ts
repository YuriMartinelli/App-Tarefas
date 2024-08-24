import { Router } from "express";
import { usuarioController } from "../controllers/indexUsuarioController";

const usuarioRoute = Router();

usuarioRoute
    .post("/cadastrar", (req, res) => usuarioController.cadastrar(req, res))
    .get("/consultarTodos", usuarioController.consultarTodos)
    .get("/consultarById/:id", usuarioController.consultarById)
    .put("/atualizar/:id", usuarioController.atualizar)
    .delete("/deletar/:id", usuarioController.deletar)

export default usuarioRoute;
import { Router } from "express";
import UsuarioController from "../controllers/usuarioController";

const usuarioRoute = Router();
const usuarioController = new UsuarioController();

usuarioRoute
    .post("/cadastrar", usuarioController.cadastrar)
    .get("/consultarTodos", usuarioController.consultarTodos)
    .get("/consultarById/:id", usuarioController.consultarById)
    .put("/atualizar/:id", usuarioController.atualizar)
    .delete("/deletar/:id", usuarioController.deletar)

export default usuarioRoute;
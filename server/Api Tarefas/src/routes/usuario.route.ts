import { Router } from "express";
import { usuarioController } from "../controllers";

const usuarioRoute = Router();

usuarioRoute
    .post("/cadastrar", (req, res) => usuarioController.cadastrar(req, res))
    .get("/consultarTodos", (req, res) => usuarioController.consultarTodos(req, res))
    .get("/consultarById/:id", (req, res) => usuarioController.consultarById(req, res))
    .put("/atualizar/:id", (req, res) => usuarioController.atualizar(req, res))
    .delete("/deletar/:id", (req, res) => usuarioController.deletar(req, res))

export default usuarioRoute;
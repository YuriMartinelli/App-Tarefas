import { UsuarioService } from "../services/usuarioService";
import { UsuarioController } from "./usuarioController";

const usuarioService = new UsuarioService()
export const usuarioController = new UsuarioController(usuarioService);
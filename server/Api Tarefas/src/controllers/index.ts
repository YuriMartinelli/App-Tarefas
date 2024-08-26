import { TarefaService } from "../services/tarefaService";
import { UsuarioService } from "../services/usuarioService";
import { AuthController } from "./authController";
import { TarefaController } from "./tarefaController";
import { UsuarioController } from "./usuarioController";

const usuarioService = new UsuarioService();
const tarefaService = new TarefaService();
export const usuarioController = new UsuarioController(usuarioService);
export const tarefaController = new TarefaController(tarefaService);
export const authController = new AuthController(usuarioService)
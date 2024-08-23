import { Usuario } from "../database/models/usuario.model"

class UsuarioService {
    constructor() {
        console.log("oi");
        
    }
    async cadastrar(infos: any) {
        try {
            const novoUsuario = await Usuario.create(infos)
            return novoUsuario;
        } catch (error) {
            return { error: error, msg: "Erro ao criar usúario" }
        }
    }

}

export default UsuarioService;
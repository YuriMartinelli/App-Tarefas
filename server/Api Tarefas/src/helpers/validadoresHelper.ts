import Joi from "joi";
import { UsuarioInterface } from "../interfaces/usuario.interface";

export const validarUsuario = (usuario: UsuarioInterface) => {
    const schema = Joi.object<UsuarioInterface>({
        nome: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        senha: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    });

    return schema.validate(usuario, { presence: "required" })
}

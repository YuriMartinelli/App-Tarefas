import Joi from "joi";
import { UsuarioInterface } from "../interfaces/usuario.interface";

export const validarCriacaoUsuario = (usuario: UsuarioInterface) => {
    const schema = Joi.object<UsuarioInterface>({
        nome: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        senha: Joi.string()
            .min(4)
    });

    return schema.validate(usuario, { presence: "required" })
}

export const validarLoginUsuario = (usuario: UsuarioInterface) => {
    const schema = Joi.object<Partial<UsuarioInterface>>({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        senha: Joi.string()
            .min(4)
    });

    return schema.validate(usuario, { presence: "required" })
}

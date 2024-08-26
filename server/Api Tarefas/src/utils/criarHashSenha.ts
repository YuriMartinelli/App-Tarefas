import { hash } from "bcrypt"

export const criarHashSenha = async (senha: string) => {
    const senhaHash = await hash(senha, 10);

    return senhaHash;
}
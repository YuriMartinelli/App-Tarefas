import { PrismaClient } from "@prisma/client"
import { criarHashSenha } from "../utils/criarHashSenha";
import { validarUsuario } from "../helpers/validadoresHelper";

export class UsuarioService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
        this.conectarPrisma();
    }

    async conectarPrisma() {
        await this.prisma.$connect();
    }

    async cadastrar(infos: any): Promise<Object> {
        const { error, value } = validarUsuario(infos);
        if (error) {
            throw new Error(error?.message)
        }
        
        value.senha = await criarHashSenha(value.senha);
        
        const novoUsuario = await this.prisma.usuario.create({ data: value });

        await this.prisma.$disconnect();

        const resposta = {
            msg: "Usúario criado com sucesso!",
            id: novoUsuario.id,
            nome: novoUsuario.nome
        }

        return resposta
    }

    async consultarTodos() {
        const usuarios = await this.prisma.usuario.findMany();

        await this.prisma.$disconnect();

        return usuarios;
    }

    async consultarByParam(params: any) {
        const usuario = await this.prisma.usuario.findUnique({ where: params });

        if (!usuario) {
            throw new Error("Usuário não encontrado!")
        }

        await this.prisma.$disconnect();

        return usuario;
    }

    async atualizar(id: number, updates: Object) {
        const usuario = this.consultarByParam({ id: id });

        if (!usuario) {
            throw new Error("Usuário não encontrado!")
        }

        const usuarioAtualizado = await this.prisma.usuario.update({
            where: { id: id },
            data: updates
        });

        const resposta = {
            msg: "Usuário atualizado com sucesso!",
            usuario: usuarioAtualizado
        };

        return resposta;
    }

    async deletar(id: number) {
        const usuario = this.consultarByParam({ id: id });

        if (!usuario) {
            throw new Error("Usuário não encontrado!")
        }

        await this.prisma.usuario.deleteMany({ where: { id: id } })

        const resposta = {
            msg: "Usuario deletado com sucesso!"
        }

        return resposta

    }

}

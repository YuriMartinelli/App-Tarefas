import { PrismaClient } from "@prisma/client"

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

        const novoUsuario = await this.prisma.usuario.create({ data: infos });

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

}

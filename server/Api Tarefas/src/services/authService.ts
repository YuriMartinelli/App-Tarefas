import { PrismaClient } from "@prisma/client";

export class AuthService {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
        this.conectarPrisma();
    }

    async conectarPrisma() {
        await this.prisma.$connect();
    }

    async cadastrar(infos: any): Promise<Object> {
        const novoToken = await this.prisma.token.create({ data: infos });

        await this.prisma.$disconnect();

        const resposta = {
            msg: "Usúario criado com sucesso!",
            id: novoToken.id,
            usuario: novoToken.usuarioId
        }

        return resposta
    }
    async deletar(param: any) {
        await this.prisma.token.delete(param)

        const resposta = {
            msg: "Token deletado com sucesso!"
        }

        return resposta

    }
}
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
            msg: "Token criado com sucesso!",
            id: novoToken.id,
            usuario: novoToken.usuarioId,
            token: novoToken.token
        }

        return resposta
    }

    async consultarByParam(param: any) {
        const tokenEncontrado = await this.prisma.token.findFirst({ where: param });

        return tokenEncontrado;
    }

    async deletar(param: any) {
        await this.prisma.token.delete(param)

        const resposta = {
            msg: "Token deletado com sucesso!"
        }

        return resposta
    }


}
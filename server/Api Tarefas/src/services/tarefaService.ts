import { PrismaClient } from "@prisma/client"

export class TarefaService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
        this.conectarPrisma();
    }

    async conectarPrisma() {
        await this.prisma.$connect();
    }

    async cadastrar(infos: any): Promise<Object> {
        const novotarefa = await this.prisma.tarefa.create({ data: infos });

        await this.prisma.$disconnect();

        const resposta = {
            msg: "Tarefa criada com sucesso!",
            id: novotarefa.id,
            titulo: novotarefa.titulo
        }

        return resposta
    }

    async consultarTodos() {
        const tarefas = await this.prisma.tarefa.findMany();

        await this.prisma.$disconnect();

        return tarefas;
    }

    async consultarById(id: any) {
        const tarefa = await this.prisma.tarefa.findUnique({ where: { id: id } });

        if (!tarefa) {
            throw new Error("Usuário não encontrado!")
        }

        await this.prisma.$disconnect();

        return tarefa;
    }

    async atualizar(id: number, updates: Object) {
        const tarefa = this.consultarById(id);

        if (!tarefa) {
            throw new Error("Usuário não encontrado!")
        }

        const tarefaAtualizado = await this.prisma.tarefa.update({
            where: { id: id },
            data: updates
        });

        const resposta = {
            msg: "Usuário atualizado com sucesso!",
            tarefa: tarefaAtualizado
        };

        return resposta;
    }

    async deletar(id: number) {
        const tarefa = this.consultarById(id);

        if (!tarefa) {
            throw new Error("Usuário não encontrado!")
        }

        await this.prisma.tarefa.deleteMany({ where: { id: id } })

        const resposta = {
            msg: "tarefa deletada com sucesso!"
        }

        return resposta

    }
}
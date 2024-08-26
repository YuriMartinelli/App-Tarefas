import express from 'express';
import cors from 'cors';
import usuarioRoute from "./routes/usuario.route"
import tarefaRoute from './routes/tarefas.route';
import { token } from './utils/createTokenHelper';
import authRoute from './routes/auth.route';

export class App {
    private express: express.Application;
    private port: number = 9000;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes(this.express);
        this.listen();
    }

    public getApp(): express.Application {
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log('Servidor iniciado na porta ' + this.port);
        });
    }

    public routes(app: express.Application): void {
        app.use('/usuarios/', usuarioRoute);
        app.use('/tarefas/', tarefaRoute);
        app.use('/auth/', authRoute);
    }
}

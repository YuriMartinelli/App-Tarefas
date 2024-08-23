import express from "express";
import cors from "cors";

export class App {
    private express: express.Application;
    private port: Number = 9000;

    constructor() {
        this.express = express();
    }

    public getApp(): express.Application {
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log("Servidor iniciado na porta " + this.port);
        });
    }
}
import { Button, Form } from "react-bootstrap";
import { Card } from "../Card";


export default function CadastrarUsuario() {
    return (
        <Card margintop="150px">
            <Form >
                <div className="mb-3">
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control required type="text" id="nome" placeholder="Informe seu nome" />
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control required type="email" id="email" placeholder="Informe seu email" />
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="senha">Senha</Form.Label>
                    <Form.Control required type="password" className="form-control" id="senha" />
                </div>
                <Button type="submit" variant="success">Cadastrar</Button>
            </Form>
        </Card>
    )
}
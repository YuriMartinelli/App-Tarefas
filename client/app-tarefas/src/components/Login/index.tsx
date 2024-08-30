import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card } from '../Card';

export default function Login() {
    return (
        <Card margintop='10%'>
            <Form>
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmail" className='mt-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Escreva seu email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Informe sua senha" />
                </Form.Group>
                <div className='mt-3'>
                    <Button type="submit">
                        Login
                    </Button>
                    <Button variant='success' type="submit">
                        Cadastrar novo usuário
                    </Button>
                </div>
            </Form>
        </Card>
    );
}



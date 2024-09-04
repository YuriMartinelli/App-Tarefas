import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card } from '../components/Card';
import { postLogin } from '../services/auth';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetchLogin();
        localStorage.setItem('token', response.token);
        
        if (response.token) {
            window.location.href = "/tarefa";
        }
    };

    async function fetchLogin() {
        return await postLogin(email, password);
    }

    return (
        <Card margintop='10%'>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmail" className='mt-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Escreva seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Informe sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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




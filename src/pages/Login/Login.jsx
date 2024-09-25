import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'; 
import { http } from "../../App";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await http.post("/auth/login", {
                email,
                password: senha,
            });

            if (response.status !== 200) {
                throw new Error(response.data.msg || 'Erro na requisição');
            }

            alert('Login bem-sucedido!');
            setEmail('');
            setSenha('');
            setErrorMessage('');

        } catch (error) {
            console.error('Erro:', error.response?.data || error.message);
            setErrorMessage(error.response?.data.msg || 'Erro ao registrar');
                
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1>Login de Usuário</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    required 
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Entrando...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;

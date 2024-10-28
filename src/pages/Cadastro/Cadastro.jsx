import axios from 'axios';
import React, { useState } from 'react';
import './Cadastro.css';
import { http } from "../../App";
import { useNavigate } from 'react-router-dom';
const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await http.post('/register/user',  { 
                name,   
                email,
                password : senha,
            });
    
            if (response.status !== 201) {
                throw new Error('Erro ao registrar o usuário');
            }
    
            const result = response.data;
            alert(result.msg); 
    
            setName('');
            setEmail('');
            setSenha('');
            setErrorMessage('');
        } catch (error) {
            console.error('Erro:', error.response?.data || error.message);
            if (error.response) {
                console.error('Response Status:', error.response.status);
                console.error('Response Data:', error.response.data);
            }
            setErrorMessage(error.response?.data.msg || 'Erro ao registrar');
        }
    };

    const handle = () => {
        navigate('/');
    };

     const handleHome = () => {
        navigate('/Home');
    };
    

    return (
        <div className="register-container">
            <h1>Cadastro de Usuário</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>} 
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />

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

                <button type="submit">Cadastrar</button>

                <button type="button" onClick={handle} className="button">
                   Login
                </button>

                <button type="button" onClick={handleHome} className="button">
                    Home
                </button>
            </form>
        </div>
    );
};

export default Cadastro;

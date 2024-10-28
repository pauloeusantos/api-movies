import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login'; 
import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://loginframework.vercel.app/'
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/Home"/>
        <Route element={<Cadastro />} path="/Cadastro" />
        <Route element={<Login />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

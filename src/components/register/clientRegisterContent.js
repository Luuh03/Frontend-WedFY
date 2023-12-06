import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/register/RegisterContent.css';

function RegisterContent() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [login, setLogin] = useState('');
    const [celular, setCelular] = useState('');

    const handleNome = (value) => {
        setNome(value);
    };

    const handleSobrenome = (value) => {
        setSobrenome(value);
    };

    const handleEmail = (value) => {
        setEmail(value);
    };

    const handleSenha = (value) => {
        setSenha(value);
    };

    const handleConfirmaSenha = (value) => {
        setConfirmaSenha(value);
    };

    const handleLogin = (value) => {
        setLogin(value);
    };

    const handleCelular = (value) => {
        setCelular(value);
    };

    function validaCampos(data) {
        if (data.Nome !== '' &&
            data.Sobrenome !== '' &&
            data.Email !== '' &&
            data.Senha !== '' &&
            data.Login !== '')
            return true;
        else
            return false;
    }

    const registrar = () => {
        const data = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Login: login,
            Senha: btoa(senha),
            Tipo: "C",
            Celular: celular,
            Noticia: [],
            ProjetoIdClienteNavigations: [],
            ProjetoIdProgramadorNavigations: [],
            ProjetoPortfolios: [],
            Solicitacoes: []
        }

        if (validaCampos(data) === true) {
            if (senha === confirmaSenha) {
                const url = 'https://localhost:7183/api/Usuarios';

                try {
                    axios.post(url, data);

                    alert("Usuário cliente cadastrado com sucesso!");
                } catch (error) {
                    console.error('Ocorreu um erro: ', error);
                }

            } else {
                alert("As senhas inseridas são diferentes!");
            }
        } else {
            alert("Por favor, preencha todos os campos corretamente!");
        }

    }

    return (
        <main className='clientRegisterPage'>
            <div className='registerContainer'>
                <div className='registerForm'>
                    <h1>Cadastro para Contratar</h1>

                    <form>
                        <label id='nome'>
                            Nome*<input type='text' onChange={(e) => handleNome(e.target.value)} required />
                        </label>

                        <label id='sobrenome'>
                            Sobrenome*<input type='text' onChange={(e) => handleSobrenome(e.target.value)} required />
                        </label>

                        <label id='email'>
                            E-mail*<input type='email' onChange={(e) => handleEmail(e.target.value)} required />
                        </label>

                        <label id='senha'>
                            Senha*<input type='password' onChange={(e) => handleSenha(e.target.value)} required />
                        </label>

                        <label id='senha'>
                            Confirma senha*<input type='password' onChange={(e) => handleConfirmaSenha(e.target.value)} required />
                        </label>

                        <label id='login'>
                            Login*<input name='login' onChange={(e) => handleLogin(e.target.value)} required />
                        </label>

                        <label id='celular'>
                            Celular<input type='tel' placeholder='(00)00000-0000' onChange={(e) => handleCelular(e.target.value)} />
                        </label>

                        <p>Deseja procurar trabalho?<br />
                            <Link>Cadastre-se como programador.</Link></p>

                        <center><button onClick={() => registrar()}>Cadastrar</button></center>
                    </form>

                </div>
            </div>

            <aside className='asideImage'>

            </aside>

        </main>
    );

};

export default RegisterContent;
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import '../../styles/login/LoginContent.css';

function LoginContent() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (value) => {
        setLogin(value);
    };

    const handleSenha = (value) => {
        setSenha(value);
    };

    const logar = () => {
        if (login !== '' && senha !== '') {
            const data = {
                Login: login,
                Senha: btoa(senha),
            }

            const url = `https://localhost:7183/api/Usuarios/${data.Login},${data.Senha}`;

            axios.post(url).then((result) => {
                if(result.data === true) {
                    alert("Usuário encontrado!");
                } else {
                    alert("Usuário não encontrado! Login e/ou senha inválidos.");
                }
            })
        }
    }

    return (
        <main className='loginPage'>
            <div className='loginForm'>
                <h1>Login</h1>

                <form>
                    <label>
                        Login:<input type='text' onChange={(e) => handleLogin(e.target.value)} required />
                    </label>

                    <label>
                        Senha:<input type='password' onChange={(e) => handleSenha(e.target.value)} required />
                    </label>

                    <center><button onClick={() => logar()}>Logar</button></center>
                </form>

                <p>Ainda não possui uma conta? Cadastre-se como:</p>

                <div className='buttonContainer'>
                    <Link id='clientButton' to="cadastroCliente">Cliente</Link>
                    <Link id='devButton' to="cadastroProgramador">Programador</Link>
                </div>
            </div>

        </main>
    );
}

export default LoginContent;
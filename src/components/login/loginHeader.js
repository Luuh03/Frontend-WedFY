import logo from '../../images/WedFY.png';
import { Link } from 'react-router-dom';
import '../../styles/login/LoginHeader.css';

function LoginHeader() {
    return (
        <header className="LoginHeader">
            <img src={logo} className='Wedfy-logo' alt='logo Wedfy' />

            <Link>Cadastrar</Link>
        </header>
    );
}

export default LoginHeader;
import { Link } from 'react-router-dom';
import logo from '../../images/WedFY.png';
import '../../styles/register/RegisterHeader.css';

function RegisterHeader() {
    return (
        <header className="RegisterHeader">
            <img src={logo} className='Wedfy-logo' alt='logo Wedfy' />

            <Link to='/'>Fazer Login</Link>
        </header>
    );
}

export default RegisterHeader;
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';


export function Header() {
    return (
        <header className="header">
            <div className='header__'>
                <Link to='/'>
                <img src={logo} alt="Logo da Contabilidade" />
                <span>Contabilidade Dendezeiros</span>
                </Link>
            </div>
            <nav className='nav'>
                
                <NavLink to="/sobre"><br />Sobre Nós</NavLink>
                <NavLink to="/contato"><br />Fale Conosco</NavLink>
                
            </nav>
        </header>
    );
}
export default Header;